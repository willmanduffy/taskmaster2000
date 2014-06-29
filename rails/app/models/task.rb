class Task < ActiveRecord::Base
  # Validations
  validates :name, presence: true
  validates :project_id, presence: true

  # Associations
  belongs_to :project
end
