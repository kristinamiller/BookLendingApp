class CreateRentals < ActiveRecord::Migration[5.2]
  def change
    create_table :rentals do |t|
      t.integer :book_id, null: false
      t.integer :member_id, null: false
      t.date :start_date
      t.date :end_date
      t.string :status 
      t.timestamps
    end
  end
end
