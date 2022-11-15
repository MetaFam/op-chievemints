import { Textarea } from '@chakra-ui/react'
import React from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import JSON5 from 'json5'
import { ERC1155Metadata } from '@/lib/types'

export const JSONForm: React.FC<{
  register: UseFormRegister<FieldValues>
  metadata: ERC1155Metadata
}> = ({
  register, metadata
}) => (
   <Textarea
    placeholder="Enter JSON5 token metadata…"
    h="75vh"
    {...register('json5')}
   >
    {JSON5.stringify(metadata)}
   </Textarea>
)

export default JSONForm