class CreateMembers < ActiveRecord::Migration[5.2]
  def change
    create_table :members do |t|
      t.string :username, null: false
      t.timestamps
    end
    add_index :members, :username, unique: true
  end
end
