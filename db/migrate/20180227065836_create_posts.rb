class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.integer :author_id, null: false
      t.integer :media_id, null: false
      t.string :media_type, null: false
      t.timestamps
    end

    add_index :posts, :author_id
    add_index :posts, :media_id
    add_index :posts, :media_type
    add_index :posts, [:media_id, :media_type], unique: true
  end
end
