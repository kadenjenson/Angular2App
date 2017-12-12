class CreateFreelanceDocs < ActiveRecord::Migration[5.1]
  def change
    create_table :freelance_docs do |t|
      t.string :title
      t.string :desricption
      t.text :file_url
      t.text :image_url

      t.timestamps
    end
  end
end
