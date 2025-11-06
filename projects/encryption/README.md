# Encryption Activity Reflection


## Part 1: Key Exchange

My Key: 2

My Partner's Key: 8

Our initial shared key: 10

## Part 2: Messaging


| Encoded Message     | Decoded Message     | Key |
| ---------------     | ---------------     | --- |
|Rovvy ryg kbo iye    |Hello how are you    | 10  |
|Apcqpnewj qtyp xlolxp|Perfectly fine madame| 11  |
|Vojs mci twbwgvsr mcif dfcxsqhg?|Have you finished your projects?| 14 |
|Klt tev tlria vlr bsbo qefkh qexq?|Now why would you even think that?| 23 |


## Part 3: Connection to TCP/IP Model

### Application Layer: Turn your message into binary

Everything we've done in this activity takes place in the application layer. By the time the message leaves the application
layer, it is encoded in binary. We've been working with text for this activity for convenience, but let's see what the binary
looks like.

Go back to the first encrypted message that you sent (it should be in `rsa_encryption_activity/send/encrypted_message.b64`).

This message is represented as a string of letters, numbers, and symbols. But we know that the real message is in binary.

Select the first six characters from this message and copy them here:
RvVEvu
Using the ASCII table, convert these five characters to binary (if necessary,
include leading zeroes so that each character is 8 bits): 

01010010 11110110 01010100 01000101 11110110 11110101

### Transport Layer: Break your message into packets

Assume that each packet can hold two bytes. Fill in the packet information below with the binary values you computed above.

    =========
    Packet 1:

    Source: Eugenie
    Destination: Maya  
    Sequence: 1/3
    Data: 01010010 11110110 
    =========
    Packet 2:

    Source: Eugenie
    Destination: Maya  
    Sequence: 2/3 
    Data: 01010100 01000101  
    =========
    Packet 3:

    Source: Eugenie
    Destination: Maya
    Sequence: 3/3
    Data: 11110110 11110101
    =========

## Part 4: Reflection Questions

- What is the difference between symmetric and asymmetric encryption? What purpose did each serve in this simulation?
	Symmetric encryption uses a shared key between two people, which typically makes it easier to hack into. Asymmetric encryption uses public keys to encrypt the message, but private ones to secrypt, making it much harder to to hack into and read any messages that are sent. 
	Asymmetric encryption served the purpose of getting the initial messages to your partner using the public keys on their Github account. A simulated version of symmetric encryption was used across a Google Doc to send all messages after the first one. This system is similar to how the signal protoccol works.
- Why is it important that this protocol uses a new key for each message?
	If there is one shared key being passed back and forth between computers it is much easier to hack into it and change whatever you want. By switching the key for each message, it not only makes it harder to hack, but even if you can do it you will only get one message.
- Why is it important that you never share your secret key?
	If your secret key is available to anyone other than you, people can hack almost any message you send and change them however they want.
- In the transport layer, do these messages use TCP or UDP? Why?
	These messages use TCP in the transport layer because it focuses more on accuracy over speed. UDP is used almost exclusively for live messages, such as multiplayer games or live streams.
- Now that you've created packets in the transport layer, give a short explanation of what happens to these packets in the internet layer and in the link layer.
- This protocol successfully encrypts the **content** of the message. Even though and adversary in the middle can't read the content of the message, what other information can they still see?
	An adversary in the middle can still see where the message is going, who sent it, how many packets there are, and any other information contained in the header of the document.
