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
    respond_to do |format|
      format.json do
        render :text => @game.to_json
      end
      format.any
    end

  end
end
