class Contact 
  include Ripple::Document
  property :first_name,String, :presence => true
  property :last_name, String, :presence => true


  def as_json(options = {})
    serializable_hash
  end

end