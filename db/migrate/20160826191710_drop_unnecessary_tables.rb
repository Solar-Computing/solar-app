class DropUnnecessaryTables < ActiveRecord::Migration[5.0]
  def change
    drop_table :heros
  end
end