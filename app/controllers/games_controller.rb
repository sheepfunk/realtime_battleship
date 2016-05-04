class GamesController < ApplicationController
  def index
    @game = Game.where.not(winner_id: nil).last
    redirect_to @game if @game
  end

  def new
    @game = Game.new
    if @game.save
      redirect_to @game
    else
      redirect_to :index
    end
  end

  def show
    @game = Game.find(params[:id])
  end
end
