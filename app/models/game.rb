class Game < ActiveRecord::Base
  has_many :players
  belongs_to :turn, :class_name => :Player, :foreign_key => "turn_id"
  belongs_to :winner, :class_name => :Player, :foreign_key => "winner_id"

  after_initialize :add_players

  def add_players
    self.players << [Player.new(name:'muffin'), Player.new(name:'wombat')] if self.new_record?
    self.turn = self.players.first
  end

end
