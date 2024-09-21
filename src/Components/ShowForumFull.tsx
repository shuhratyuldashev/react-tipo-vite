import React, { Component } from 'react'
import { AiOutlinePlus } from 'react-icons/ai';

export default class ShowForumFull extends Component {
  render() {
    return (
      <section className="ShowForumBg">
        <div className="Forum">
          <div className="header-forum">
            <h2 className='desktop'>Please fill out the Forum to Create a post</h2>
            <h2 className='tablet'>Please fill out the <br />Forum to Create a post</h2>
            <button className='desktop'>
              <AiOutlinePlus className='Forum-icon' size={25}/>
              <span>Close</span>
            </button>
            <button className='tablet'>
              <AiOutlinePlus className='Forum-icon' size={30}/>
              <span>Close</span>
            </button>
          </div>
          <form action="" className="Forum-inputs">
            <div className="user-info-inputs">
              <div className="input-width50">
                <p>User Image:</p>
                <input placeholder='Link image...' type="text" />
              </div>
              <div className="input-width50">
                <p>User Name:</p>
                <input placeholder='Name User...' type="text" />
              </div>
            </div>

            <div className="post-cover-input">
              <div className="input-width100">
              <p>Link for post Cover:</p>
              <input placeholder='Link image...' type="text" />
              </div>
            </div>

            <div className="post-content-inputs">
              <div className="input-width50">
                <p>Post Title:</p>
                <input placeholder='Title...' type="text" />
              </div>
              <div className="input-width50">
                <p>Post Subtitle:</p>
                <input placeholder='Subtitle' type="text" />
              </div>
              <div className="input-width100">
                <p>Post Content:</p>
                <textarea placeholder='Fill in this field...' name="" id=""></textarea>
              </div>
            </div>

            <div className="links-input">
              <div className="input-width30">
                <p>Name of the first Link:</p>
                <input placeholder='Name Link...' type="text" />
              </div>
              <div className="input-width30">
                <p>Name of the second Link:</p>
                <input placeholder='Name Link...' type="text" />
              </div>
              <div className="input-width30">
                <p>Name of the third Link:</p>
                <input placeholder='Name Link...' type="text" />
              </div>
              <div className="input-width30">
                <p>First Link:</p>
                <input placeholder='Name Link...' type="text" />
              </div>
              <div className="input-width30">
                <p>Second Link:</p>
                <input placeholder='Name Link...' type="text" />
              </div>
              <div className="input-width30">
                <p>Third Link:</p>
                <input placeholder='Name Link...' type="text" />
              </div>
            </div>

            <div className="btn-add-post">
              <button>
              <AiOutlinePlus className='Add-icon' size={25}/>
                <span>Add</span>
              </button>
            </div>
          </form>
        </div>
      </section>
    )
  }
}
