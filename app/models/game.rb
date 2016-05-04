class Game < ActiveRecord::Base
  has_many :players

  after_initialize :add_players

  def add_players
    self.players << [Player.new(name:'muffin'), Player.new(name:'wombat')] if self.new_record?
  end

  def turn
    Player.find(turn_id)
  end
end
