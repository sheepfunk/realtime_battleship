class MovesController < ApplicationController

  def new
    @move = Move.create(game_id:params[:game_id], player_id: params[:player_id])
    redirect_to game_player_path(params[:game_id], params[:player_id])
  end
end
