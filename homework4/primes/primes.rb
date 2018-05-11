def is_prime?(n)
  result = true
  for d in 2..(n - 1)
    if n % d == 0
       result = false
    else
       result
    end
  end
  result
end
is_prime?(29)
