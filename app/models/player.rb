class Player < ActiveRecord::Base
  belongs_to :game

  def my_turn
    id == game.turn.id
  end
end
