// const Conversation = require("../model/conversation");
// const ErrorHandler = require("../utils/ErrorHandler");
// const catchAsyncErrors = require("../middleware/catchAsyncErrors");
// const express = require("express");
// const { isGarment, isAuthenticated } = require("../middleware/auth");
// const router = express.Router();

// // create a new conversation
// router.post(
//     "/create-new-conversation",
//     catchAsyncErrors(async (req, res, next) => {
//         try {
//             const { groupTitle, userId, garmentId } = req.body;

//             const isConversationExist = await Conversation.findOne({ groupTitle });

//             if (isConversationExist) {
//                 const conversation = isConversationExist;
//                 res.status(201).json({
//                     success: true,
//                     conversation,
//                 });
//             } else {
//                 const conversation = await Conversation.create({
//                     members: [userId, garmentId],
//                     groupTitle: groupTitle,
//                 });

//                 res.status(201).json({
//                     success: true,
//                     conversation,
//                 });
//             }
//         } catch (error) {
//             return next(new ErrorHandler(error.response.message), 500);
//         }
//     })
// );

// // get garment conversations
// router.get(
//     "/get-all-conversation-garment/:id",
//     isGarment,
//     catchAsyncErrors(async (req, res, next) => {
//         try {
//             const conversations = await Conversation.find({
//                 members: {
//                     $in: [req.params.id],
//                 },
//             }).sort({ updatedAt: -1, createdAt: -1 });

//             res.status(201).json({
//                 success: true,
//                 conversations,
//             });
//         } catch (error) {
//             return next(new ErrorHandler(error), 500);
//         }
//     })
// );


// // // get user conversations
// // router.get(
// //   "/get-all-conversation-user/:id",
// //   isAuthenticated,
// //   catchAsyncErrors(async (req, res, next) => {
// //     try {
// //       const conversations = await Conversation.find({
// //         members: {
// //           $in: [req.params.id],
// //         },
// //       }).sort({ updatedAt: -1, createdAt: -1 });

// //       res.status(201).json({
// //         success: true,
// //         conversations,
// //       });
// //     } catch (error) {
// //       return next(new ErrorHandler(error), 500);
// //     }
// //   })
// // );

// // // update the last message
// // router.put(
// //   "/update-last-message/:id",
// //   catchAsyncErrors(async (req, res, next) => {
// //     try {
// //       const { lastMessage, lastMessageId } = req.body;

// //       const conversation = await Conversation.findByIdAndUpdate(req.params.id, {
// //         lastMessage,
// //         lastMessageId,
// //       });

// //       res.status(201).json({
// //         success: true,
// //         conversation,
// //       });
// //     } catch (error) {
// //       return next(new ErrorHandler(error), 500);
// //     }
// //   })
// // );

// module.exports = router;