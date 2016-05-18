class MovesController < ApplicationController

  def new
    @move = Move.create(game_id:params[:game_id], player_id: params[:player_id])
    @move.next_turn
    message = {
        :msg => {
            :current_turn => @move.game.turn_id
        },
        :recipient_user_ids => @move.game.players.collect(&:id)
    }
    $redis.publish 'realtime_msg', message.to_json
    render json: nil, status: :ok
  end
end
