
package com.ncs503.Babybook.service;

import com.ncs503.Babybook.exception.InvalidUserException;
import com.ncs503.Babybook.exception.UserNotFoundException;
import com.ncs503.Babybook.models.request.UpdateUserRequest;
import com.ncs503.Babybook.models.request.UserRequest;
import com.ncs503.Babybook.models.response.UserResponse;
import java.util.List;

/**
 *
 * @author Leonardo Terlizzi
 */
//@Service
public interface UserService {
    
    public List<UserResponse> getUsers() throws UserNotFoundException;
    
    public UserResponse getUser(Long id) throws UserNotFoundException;
    
    //public void saveUser(UserRequest userReq) throws InvalidUserException;
    
    public void deleteUser(Long id) throws UserNotFoundException;
    
    public UserResponse updateUser(UpdateUserRequest userReq, Long id) throws InvalidUserException, UserNotFoundException;
    
}
