class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :name
      t.integer :project_id

      t.timestamps
    end

    add_index :tasks, :project_id
  end
end
