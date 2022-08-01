import { html } from "../../node_modules/lit-html/lit-html.js";
import { createSubmitHandler } from "../util.js";
import * as commentsService from "../api/comments.js";

const commentsTemplate = (comments) => html`
<div class="details-comments">
    <h2>Comments:</h2>
    ${comments.length > 0 
    ? commentList(comments)
    : html`<p class="no-comment">No comments.</p>`
}
    
</div>
`;

const commentList = (comments) => html`
   <ul>  
       ${comments.map(commentCard)}
    </ul> 
`;

const commentCard = (comment) => html`
    <li class="comment">
            <p>Content: ${comment.comment}</p>
    </li>
 `

export async function commentsView(gameId){
    const comments = await commentsService.getByGameId(gameId);
    console.log(comments);
    return commentsTemplate(comments);
    //We not rendering because that is role on Details.js
    //We took the comments and give on the template ready for using 
}