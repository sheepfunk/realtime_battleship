class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.integer :winner_id
      t.integer :turn_id

      t.timestamps null: false
    end
  end
end
