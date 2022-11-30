package com.ncs503.Babybook.controller;

import com.ncs503.Babybook.exception.GuestNotFoundException;
import com.ncs503.Babybook.exception.InvalidGuestException;
import com.ncs503.Babybook.exception.InvalidUserException;
import com.ncs503.Babybook.exception.UserNotFoundException;
import com.ncs503.Babybook.models.entity.GuestEntity;
import com.ncs503.Babybook.models.mapper.GuestMapper;
import com.ncs503.Babybook.models.request.GuestRequest;
import com.ncs503.Babybook.models.response.GuestResponse;
import com.ncs503.Babybook.repository.GuestRepository;
import com.ncs503.Babybook.service.GuestService;
import io.swagger.annotations.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

/**
 * @author Leonardo Terlizzi
 */
@RestController
@RequestMapping(path = "/guest")
@Api(description = "Guest CRUD", tags = "Guests")
public class GuestEntityController {

    @Autowired
    private GuestService guestServ;

    @Autowired
    private GuestMapper guestMapper;

    @Autowired
    private GuestRepository guestRepo;

    @GetMapping("/all")
    @ApiOperation(value="List all the guests", notes = "Endpoint that return a list of all the guests")
    @ApiResponses(value= {
            @ApiResponse(code= 200, message = "Guest's List"),
            @ApiResponse(code=403, message = "Forbidden action")
    })
    public ResponseEntity<List<GuestResponse>> getGuests() throws GuestNotFoundException{
        List<GuestResponse> guests = guestServ.getGuests();
        return new ResponseEntity<>(guests, HttpStatus.OK);
    }

    @GetMapping("/getPagination")
    @ApiOperation(value="List all the guests using pagination", notes = "Endpoint that return a list of all the guests by page")
    @ApiResponses(value ={
            @ApiResponse(code=200, message = "Guest's List"),
            @ApiResponse(code=403, message = "Forbidden action")
    })
    public ResponseEntity<?> getGuestPagination(@RequestParam Optional<Integer> page,
                                                @RequestParam Optional<Integer> size) throws GuestNotFoundException {
        return new ResponseEntity<>(guestServ.getAllGuestByPage(page, size), HttpStatus.OK);
    }

    @GetMapping("/getByUser")
    @ApiOperation(value="List the user's guests list", notes = "Endpoint that return the list of user's guests")
    @ApiResponses(value= {
            @ApiResponse(code= 200, message = "User's guests list"),
            @ApiResponse(code=403, message = "Forbidden action")
    })
    public ResponseEntity<List<GuestResponse>> getGuestsByUser(@RequestHeader(name="Authorization") String token,
                                                               @ApiParam(name= "user_id",type = "Long",example = "1325",
                                                                       value = "Id of the user")
                                                               @RequestParam Long user_id) throws UserNotFoundException, InvalidUserException, GuestNotFoundException {
        return new ResponseEntity<>(guestServ.getGuestsByUser(token, user_id), HttpStatus.OK);
    }

    @GetMapping("/getById")
    @ApiOperation(value="Guest", notes = "Endpoint that return a guest by its id")
    @ApiResponses(value= {
            @ApiResponse(code= 200, message = "Guest response"),
            @ApiResponse(code=403, message = "Forbidden action")
    })
    public ResponseEntity<GuestResponse> getGuest(@ApiParam(name= "guest_id",type = "Long",example = "1325",
                                                    value = "Id of the guest")
                                                    @RequestParam Long guest_id,
                                                    @RequestHeader(name="Authorization") String token,
                                                     @ApiParam(name= "user_id",type = "Long",example = "1325",
                                                          value = "Id of the user")
                                                    @RequestParam Long user_id)
            throws GuestNotFoundException, InvalidUserException, UserNotFoundException, InvalidGuestException {
        return new ResponseEntity<>(guestServ.getGuest(guest_id, token,user_id), HttpStatus.OK);
    }

    @PostMapping("/new")
    @ApiOperation(value="Create new guest", notes = "Endpoint that create a new guest")
    @ApiResponses(value= {
            @ApiResponse(code= 200, message = "Guest created!"),
            @ApiResponse(code=403, message = "Forbidden action")
    })
    public ResponseEntity<GuestResponse> saveGuest(@RequestBody GuestRequest guestReq,
                                                   @RequestHeader(name="Authorization")String token,
                                                   @ApiParam(name= "user_id",type = "Long",example = "1325",
                                                           value = "Id of the user")
                                                   @RequestParam Long user_id
                                                ) throws InvalidGuestException, GuestNotFoundException, InvalidUserException, UserNotFoundException {


        return new ResponseEntity<>(guestServ.saveGuest(guestReq, token, user_id), HttpStatus.OK);
    }

    @DeleteMapping("/delete")
    @ApiOperation(value="Delete a guest", notes = "Endpoint that allow an user to delete a guest")
    @ApiResponses(value= {
            @ApiResponse(code= 200, message = "Guest deleted!"),
            @ApiResponse(code=403, message = "Forbidden action")
    })
    public ResponseEntity<Void> deleteGuest(@ApiParam(name= "guest_id",type = "Long",example = "1325",
                                            value = "Id of the guest")
                                            @RequestParam Long guest_id,
                                            @RequestHeader(name="Authorization")String token,
                                            @ApiParam(name= "user_id",type = "Long",example = "1325",
                                                    value = "Id of the user")
                                            @RequestParam Long user_id) throws GuestNotFoundException, InvalidUserException, UserNotFoundException {
        guestServ.deleteGuest(guest_id, token, user_id);
        return ResponseEntity.status(HttpStatus.OK).build();

    }

    @DeleteMapping("/su/delete")
    @ApiOperation(value="Delete a guest(admin)", notes = "Endpoint that allow an admin to delete a guest")
    @ApiResponses(value= {
            @ApiResponse(code= 200, message = "Guest deleted!"),
            @ApiResponse(code=403, message = "Forbidden action")
    })
    public ResponseEntity<Void> adminDeleteGuest(@ApiParam(name= "guest_id",type = "Long",example = "1325",
                                                    value = "Id of the guest")
                                                    @RequestParam Long guest_id,
                                                    @RequestHeader(name="Authorization")String token) throws GuestNotFoundException, InvalidUserException, UserNotFoundException {
        guestServ.adminDeleteGuest(guest_id);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @PatchMapping("/update")
    @ApiOperation(value="Update a guest", notes = "Endpoint that allow an user to update a guest")
    @ApiResponses(value= {
            @ApiResponse(code= 200, message = "Guest updated!"),
            @ApiResponse(code=403, message = "Forbidden action")
    })
    public ResponseEntity<GuestResponse> updateGuest(@RequestBody GuestRequest guestReq,
                                                     @ApiParam(name= "guest_id",type = "Long",example = "1325",
                                                             value = "Id of the guest")
                                                     @RequestParam Long guest_id,
                                                     @RequestHeader(name="Authorization")String token,
                                                     @ApiParam(name= "user_id",type = "Long",example = "1325",
                                                             value = "Id of the user")
                                                     @RequestParam Long user_id) throws InvalidGuestException, GuestNotFoundException, InvalidUserException, UserNotFoundException {

        return new ResponseEntity<>(guestServ.updateGuest(guestReq, guest_id, token, user_id), HttpStatus.OK);
    }

    @PatchMapping("/su/update")
    @ApiOperation(value="Update a guest(admin)", notes = "Endpoint that allow an admin to update a guest")
    @ApiResponses(value= {
            @ApiResponse(code= 200, message = "Guest updated!"),
            @ApiResponse(code=403, message = "Forbidden action")
    })
    public ResponseEntity<GuestResponse> adminUpdateGuest(@RequestBody GuestRequest guestReq,
                                                          @ApiParam(name= "guest_id",type = "Long",example = "1325",
                                                                  value = "Id of the user")
                                                          @RequestParam Long guest_id,
                                                          @RequestHeader(name="Authorization")String token,
                                                          @ApiParam(name= "user_id",type = "Long",example = "1325",
                                                                  value = "Id of the user")
                                                          @RequestParam Long user_id) throws InvalidGuestException, GuestNotFoundException, InvalidUserException, UserNotFoundException {

        return new ResponseEntity<>(guestServ.adminUpdateGuest(guestReq, guest_id), HttpStatus.OK);
    }
}
