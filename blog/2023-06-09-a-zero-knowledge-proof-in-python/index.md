---
slug: a-zero-knowledge-proof-in-python
title: "Simple Zero Knowledge proof in Python"
authors: [bones]
tags: [loreum, code, research, crypto]
---


A zero-knowledge proof (ZKP) is a cryptographic protocol that allows one party, known as the prover, to convince another party, known as the verifier, that a statement is true without revealing any additional information beyond the validity of the statement itself. In other words, the prover can prove knowledge of a secret or some other confidential information without actually revealing the secret.
<!-- truncate -->

Let's illustrate a simple example of a zero-knowledge proof using Python. We'll consider the scenario where the prover wants to convince the verifier that they know a secret number without revealing the actual value of the number.

Here's the Python code for the prover:

```python
import random

# Secret number known by the prover
secret_number = random.randint(1, 100)

# Function to generate a random commitment
def generate_commitment():
    # Generate a random number
    r = random.randint(1, 100)
    # Calculate the commitment as the sum of the secret number and the random number
    commitment = secret_number + r
    return commitment

# Generate the commitment
commitment = generate_commitment()

# Send the commitment to the verifier
print("Prover sends commitment to verifier:", commitment)
```

And here's the Python code for the verifier:

```python
# Receive the commitment from the prover
commitment = int(input("Enter commitment received from the prover: "))

# Challenge the prover with a random number
challenge = random.randint(0, 1)

# Send the challenge to the prover
print("Verifier sends challenge to prover:", challenge)

# Prover generates a response based on the challenge
if challenge == 0:
    # Prover reveals the secret number
    response = secret_number
else:
    # Prover reveals the random number used to generate the commitment
    response = commitment - secret_number

# Send the response to the verifier
print("Prover sends response to verifier:", response)

# Verifier checks if the response is valid
if challenge == 0:
    # Verifier checks if the response matches the secret number
    is_valid = response == secret_number
else:
    # Verifier checks if the response matches the random number
    is_valid = response + secret_number == commitment

# Print the verification result
if is_valid:
    print("Verification successful. Prover knows the secret number.")
else:
    print("Verification failed. Prover does not know the secret number.")
```

In this example, the prover generates a random commitment by adding a random number to the secret number. The commitment is then sent to the verifier. The verifier challenges the prover with a random number (0 or 1), and based on the challenge, the prover responds by revealing either the secret number or the random number used to generate the commitment. The verifier then checks the validity of the response and determines if the prover indeed knows the secret number without revealing it.

Note that this is a simplified example to demonstrate the concept of zero-knowledge proofs. In practice, zero-knowledge proofs are used in more complex scenarios and rely on advanced cryptographic techniques.