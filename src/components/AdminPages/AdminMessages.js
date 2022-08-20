import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllMessages, deleteAMessage } from "../../store/messages";

const AdminMessages = () => {
  const dispatch = useDispatch();

  const messages = useSelector((state) => state.MessagesReducer);

  useEffect(() => {
    dispatch(fetchAllMessages());
  }, []);

  return (
    <>
      <div style={{ width: "100%" }}>
        <table style={{ width: "70%" }}>
          <tr>
            <td className='td-messages'>ID</td>
            <td className='td-messages'>Subject</td>

            <td className='td-messages'>Email</td>
            <td className='td-messages'>Message</td>
            <td className='td-messages'></td>
          </tr>

          {messages.map((item) => (
            <tr>
              <td className='td-messages'>Request #{item.id}</td>
              <td className='td-messages'>{item.topic}</td>
              <td className='td-messages'>{item.email}</td>

              <td className='td-messages message'>{item.message}</td>
              <td className='td-messages'>
                <div
                  className='delete-but-adminproducts'
                  onClick={() => dispatch(deleteAMessage(item.id))}
                >
                  Delete
                </div>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
};

export default AdminMessages;
