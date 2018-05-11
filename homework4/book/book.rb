class Book
  attr_accessor :title, :chapters

  def initialize(title='', chapters=[])
    @title = title
    @chapters = chapters
  end


  def add_chapter(chap)
    @chapters << chap
  end


  def chapters
    print @chapters
  end
end

b = Book.new
b.chapters
