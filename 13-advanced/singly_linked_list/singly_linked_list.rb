class SinglyLinkedList

  include Enumerable # Mixin (kind of like multiple inheritance)

  class Node
    attr_accessor :value, :next

    def initialize(value)
      @value = value
      @next = nil
    end
  end

  attr_accessor :head

  def initialize(value=nil)
    @head = Node.new(value) if value
  end

  def prepend(value) # AKA .unshift
    node = Node.new value
    node.next = @head
    @head = node
  end

  def append(value) # AKA .push # TODO: What is the time complexity for append
    last.next = Node.new value
  end

  def last
    node = @head
    while node && node.next
      node = node.next # Traverse by following each node's next node
    end
    node
  end

  def insert_after(node, new_node)
  end

  def remove # AKA shift
    node = @head
    @head = @head.next
    node
  end

  def find(needle)
    # return the node with the value of needle OR nil
  end

  def reverse
    reverse_list = SinglyLinkedList.new
    node = @head
    while node
      reverse_list.prepend(node.value)
      node = node.next
    end
    reverse_list
  end

  def reverse!
    @head = reverse.head
  end

  def each
    node = @head
    while node
      yield node.value if block_given?
      node = node.next
    end
  end

  # Also: .map, .inject
  # Bonus: at_index(5) # AKA [5]
end

bros = SinglyLinkedList.new 'Groucho'

require 'pry'
binding.pry
