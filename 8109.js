function ReadPacket()
{
	// Code
/*

  localByteBuffer.putLong(this.jdField_a_of_type_Long);
    localByteBuffer.putLong(this.jdField_b_of_type_Long);
    localByteBuffer.putInt(this.jdField_b_of_type_Int);
    localByteBuffer.putInt(this.c);
    localByteBuffer.putShort(this.jdField_a_of_type_Short);*/


		packet.ReadLong("Character id ?");
		packet.ReadLong("Monster id ?");
		packet.ReadInt("Unk3");
		packet.ReadInt("Unk4");
		packet.ReadShort("Unk5");

}

ReadPacket();