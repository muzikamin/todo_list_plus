import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";

export const Delete = ({
  isOpen,
  onClose,
  cancelRef,
  currentId,
  onClickDelete,
}) => {
  return (
    <AlertDialog
      isOpen={isOpen}
      onClose={onClose}
      leastDestructiveRef={cancelRef} //취소할 레퍼런스
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader>일정삭제</AlertDialogHeader>
          <AlertDialogBody>정말로 일정을 삭제하시겠습니까?</AlertDialogBody>
          <AlertDialogFooter>
            <Button
              marginRight="15px"
              colorScheme="red"
              onClick={() => {
                onClose();
                onClickDelete(currentId);
              }}
            >
              삭제하기
            </Button>
            <Button ref={cancelRef} onClick={onClose}>
              취소하기
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};
