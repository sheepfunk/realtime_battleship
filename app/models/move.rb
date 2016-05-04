class Move < ActiveRecord::Base
  belongs_to :player
  belongs_to :game

  after_create :next_turn

  def next_turn
    game.turn = game.players.select{|x| x.id != player.id }.first
    game.save
  end
end
