class CreateTexts < ActiveRecord::Migration[5.1]
  def change
    create_table :texts do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.timestamps
    end

    add_index :texts, :title
  end
end
