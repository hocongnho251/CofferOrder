import firebase from 'firebase';
import { FirebaseAuth } from '../environment/FirebaseConfig';
import { Logger } from './Logger';

const FB_STORAGE_IMAGE_USER_PATH = 'users/';
const FB_STORAGE_IMAGE_GIFT_PATH = 'gifts/';
const FB_STORAGE_IMAGE_COLUMN_PATH = 'contents/images/columns/';
const FB_STORAGE_IMAGE_RECIPE_PATH = 'contents/images/recipes/';
const FB_STORAGE_IMAGE_NOTICE_PATH = 'contents/images/notices/';
const FB_STORAGE_IMAGE_PROMOTION_PATH = 'contents/images/promotions/';
const FB_STORAGE_IMAGE_RECOMMENDED_ITEM_PATH = 'contents/images/recommendedItems/';

const giftImagePath = (uid: string | undefined, imageName: string | undefined) => {
  return `${FB_STORAGE_IMAGE_USER_PATH}${uid}/${FB_STORAGE_IMAGE_GIFT_PATH}${imageName}.png`;
}

const uploadImageToFirebase = async (imageUri: string, destPath: string) => {
  const response = await fetch(imageUri);
  const blob = await response.blob();
  const ref = firebase.storage().ref().child(destPath);
  const snapshot = await ref.put(blob);
  const downloadURL = await snapshot.ref.getDownloadURL();
  return downloadURL;
}

const columnImagePath = (imageName: string | undefined) => {
  return `${FB_STORAGE_IMAGE_COLUMN_PATH}${imageName}.png`;
}

const recipeImagePath = (imageName: string | undefined) => {
  return `${FB_STORAGE_IMAGE_RECIPE_PATH}${imageName}.png`;
}

const noticeImagePath = (imageName: string | undefined) => {
  return `${FB_STORAGE_IMAGE_NOTICE_PATH}${imageName}.png`;
}

const getGiftImagePathByName = (imageName: string) => {
  const uid = FirebaseAuth.currentUser?.uid;
  return giftImagePath(uid, imageName);
}

const promotionImagePath = (imageName: string | undefined) => {
  return `${FB_STORAGE_IMAGE_PROMOTION_PATH}${imageName}.png`
}

const recommendedItemImagePath = (imageName: string | undefined) => {
  return `${FB_STORAGE_IMAGE_RECOMMENDED_ITEM_PATH}${imageName}.png`
}

const deleteImagesFromFirebase = (imageName: string) => {
  const giftImagePathValue = getGiftImagePathByName(imageName);
  const giftImageThumbnail200PathValue = getGiftImagePathByName(imageName + '_200x200');
  const giftImageThumbnail400PathValue = getGiftImagePathByName(imageName + '_400x400');
  const giftImagePathRef = firebase.storage().ref(giftImagePathValue);
  const giftImageThumbnail200PathRef = firebase.storage().ref(giftImageThumbnail200PathValue);
  const giftImageThumbnail400PathRef = firebase.storage().ref(giftImageThumbnail400PathValue);
  giftImagePathRef.delete()
    .catch(errorContent => {
      Logger.debug(errorContent);
    });
  giftImageThumbnail200PathRef.delete()
    .catch(errorContent => {
      Logger.debug(errorContent);
    });
  giftImageThumbnail400PathRef.delete()
    .catch(errorContent => {
      Logger.debug(errorContent);
    });
}

export const FileUtils = {
  giftImagePath,
  uploadImageToFirebase,
  columnImagePath,
  recipeImagePath,
  noticeImagePath,
  getGiftImagePathByName,
  promotionImagePath,
  recommendedItemImagePath,
  deleteImagesFromFirebase
}