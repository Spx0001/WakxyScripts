function ReadPacket()
{

/*


   localByteBuffer.putLong(this.jdField_a_of_type_Long);
    localByteBuffer.putInt(this.b);
    localByteBuffer.putInt(this.c);
    localByteBuffer.putShort(this.jdField_a_of_type_Short);
    localByteBuffer.put((byte)(this.jdField_a_of_type_Boolean ? 1 : 0));*/
packet.ReadLong("character_Id");
packet.ReadInt("X");
packet.ReadInt("Y");
packet.ReadShort("Unk1");
packet.ReadByte("Unk2");
}

ReadPacket();