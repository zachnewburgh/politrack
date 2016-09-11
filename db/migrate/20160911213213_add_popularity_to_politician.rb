class AddPopularityToPolitician < ActiveRecord::Migration[5.0]
  def change
    add_column :politicians, :popularity, :integer
  end
end
