import { createBlock } from '@wordpress/blocks';
import { Button } from '@wordpress/components';

const { select, dispatch } = wp.data;

interface SingleBlockTypeAppenderProps {
  buttonText?: string;
}

const SingleBlockTypeAppender = ({
  buttonText = 'Add block',
}: SingleBlockTypeAppenderProps) => {
  const addLastDuplicate = () => {
    // Get the current block
    const currentBlock = select('core/block-editor').getSelectedBlock();
    const { clientId, innerBlocks } = currentBlock;

    // get the last block
    const lastBlock = innerBlocks[innerBlocks.length - 1];
    // duplicate the last block
    const newBlock = createBlock(
      lastBlock.name,
      lastBlock.attributes,
      lastBlock.innerBlocks
    );

    dispatch('core/block-editor').insertBlocks(newBlock, 0, clientId);
  };

  return (
    <Button variant="primary" onClick={() => addLastDuplicate()}>
      {buttonText}
    </Button>
  );
};

export default SingleBlockTypeAppender;
