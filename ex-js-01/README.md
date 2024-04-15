//-----------------------------------------So sánh giữa map(), forEach, và for loop //-----------------------------------------

+ Giống: cả ba hàm đều lặp qua phần tử của một mảng và thực hiện thao tác trên mỗi phần tử đó.

+ Khác: 
    for loop: 
        - Vòng lặp for là một control flow statement (lệnh điều kiển luồng đi) dùng để thực thi một khối mã lệnh lặp đi lặp lại cho đến khi điều kiện được đáp ứng.
        - Vì có điều kiện, vòng for có thể break ra khỏi hàm mặc dù vẫn còn phần tử trong mảng. 
        - Với một vòng lặp for, bạn có thể thực hiện bất kỳ loại thao tác nào trên các phần tử của một mảng, bao gồm async promise.
        - For loop thích hợp khi bạn cần kiểm soát linh hoạt hơn trong quá trình lặp, hoặc cần thực hiện các loại thao tác phức tạp hơn trên các phần tử của mảng.

    map(): 
        - Phương thức map() là một HOC (hàm bật cao), nhận một hàm callback làm đối số, và callback này được thực thi trên mỗi phần tử của mảng. Cuối cùng return một mảng mới với kết quả của hàm gọi lại.
        - map() về bản chất sẽ lặp qua và return lại tất cả phần tử vào trong mảng mới mặc dù có phần tử không được thao tác.
        - map() thích hợp khi muốn thực hiện một phép toán cụ thể trên từng phần tử của mảng và tạo ra một mảng mới với kết quả của phép toán đó.

    forEach():
        - Phương thức forEach() là một HOC, không tạo ra một mảng mới, thay vào đó, nó chỉ thực thi một hàm callback cho mỗi phần tử của mảng.


//----------------------------------------- So sánh giữa find, findIndex, filter //-----------------------------------------

+ Giống: các hàm đều lặp qua từng phần tử để tìm kiếm phần tử trùng với điều kiện

+ Khác : 
    find, findIndex, findLast, findLastIndex:
        - Lặp và return về phần tử đầu tiên trùng với điều kiện, cho dù trong mảng còn có các phần tử khác đều đúng với điều kiện.
        - Return về undefined nếu không tìm thấy phần tử nào đúng với điều kiện.
        - Nhược: Trong trường hợp mảng có kích thước lớn hàm find() sẽ dùng linear search, lặp qua từng phần tử và gọi callback để kiểm tra điều kiện cho đến khi tìm được phần tử phù hợp, dẫn đến không hiệu quả về mặt hiệu suất

    filter: 
        - Tạo ra một mảng mới chứa các phần tử của mảng gốc mà thỏa mãn điều kiện được chỉ định.
        - Nhược: Khi sử dụng filter() để lọc một mảng lớn, nó có thể tạo ra một mảng mới có kích thước lớn, tốn nhiều bộ nhớ hơn.

//----------------------------------------- So sánh giữa reduce và for loop //-----------------------------------------

+ Giống: reduce() và for loop dùng để tính toán (reduce) một mảng thành 1 giá trị duy nhất.

+ Khác : 
     reduce(): 
        + Viết mã ngắn gọn và dễ đọc hơn so với việc sử dụng vòng lặp for, đặc biệt khi bạn cần thực hiện các thao tác tích luỹ trên mảng.
        + Có thể thực hiện các phép toán tích luỹ phức tạp như tổng hợp, tính tổng, tích, tìm giá trị lớn nhất/nhỏ nhất.
        + Reduce() không thay đổi mảng gốc mà nó được gọi trên, mà thay vào đó, nó trả về một giá trị duy nhất.
        + Reduce() cũng có thể sử dụng để làm phẳng mảng
        + Nhược: Cú pháp khó hiểu và khó sử dụng.

//----------------------------------------- So sánh giữa reduce() và flat() //-----------------------------------

+ Giống: Cả hai phương thức reduce() và flat() đều có thể được sử dụng để làm phẳng một mảng.

+ Khác: 
    reduce():
        +  reduce() không phải là một phương thức được thiết kế đặc biệt để làm phẳng mảng, nhưng nó có thể được sử dụng để thực hiện làm phẳng mảng khi kết hợp với hàm concat().
        + Cách thức thực hiện với reduce() có thể phức tạp hơn so với flat() vì nếu mảng đa chiều, reduce() sẽ phải dùng đến đệ quy và concat() để xử lý dẫn đến performance bị ảnh hướng rất lớn.

    flat():
        + flat() trong JavaScript sử dụng phương pháp đệ quy để làm phẳng mảng đa chiều.
        + flat() có thể xử lý mảng có nhiều mức lồng nhau bằng cách chỉ định depth để làm phẳng mảng đó sâu hơn.
        
//----------------------------------------- So sánh giữa indexOf() và findIndex //-----------------------------------
+ Giống: Cả hai phương thức đều dùng để trả về chỉ mục của một phần tử và đêu return về -1 nếu không tìm thấy.

+ Khác: khác nhau lớn nhất của 2 hàm là đối số truyền vào.
    indexOf():
        + Đối số truyền vào là kiểu dữ liệu raw.
        + Mặc định sử dụng toán tử tương đồng (strict equality operator ===) để so sánh giá trị.
        + indexOf() hoạt động tốt ở mảng đơn chiều.
    
    findIndex():
        + Đối số truyền vào là callback.
        + là một phương thức sử dụng callback để tìm kiếm phần tử đầu tiên trong mảng thỏa mãn một điều kiện nhất định được cung cấp qua một hàm so sánh.

//----------------------------------------- Những hàm thay đổi mảng gốc //-----------------------------------------
pop():
    + Ưu điểm:
        - Loại bỏ phần tử cuối cùng của mảng và trả về phần tử đã loại bỏ.
        - Dễ sử dụng và hiệu quả cho các tác vụ liên quan đến loại bỏ phần tử cuối cùng của mảng. 
    + Nhược điểm:
        - Chỉ hoạt động với phần tử cuối cùng của mảng, không thể xóa bất kỳ phần tử ở vị trí khác.
        - Pop() làm thay đổi mảng gốc.

push():
    + Ưu điểm:
        - Thêm một hoặc nhiều phần tử vào cuối mảng và trả về chiều dài mới của mảng.
        - Sử dụng và hiệu quả cho các tác vụ liên quan đến thêm phần tử vào cuối mảng.
    + Nhược điểm:
        - Chỉ hoạt động với phần tử cuối cùng của mảng, không thể thêm phần tử ở vị trí khác.

shift():
    + Ưu điểm:
        - Loại bỏ phần tử đầu tiên của mảng và trả về phần tử đã loại bỏ.
        - Dễ sử dụng và hiệu quả cho các tác vụ liên quan đến loại bỏ phần tử đầu tiên của mảng.
    + Nhược điểm:
        - Duyệt qua toàn bộ mảng để dịch chuyển các phần tử về vị trí mới, có thể làm giảm hiệu suất đối với các mảng lớn.

unshift():
    + Ưu điểm:
        - Thêm một hoặc nhiều phần tử vào đầu mảng và trả về chiều dài mới của mảng.
        - Dễ sử dụng và hiệu quả cho các tác vụ liên quan đến thêm phần tử vào đầu mảng.
    + Nhược điểm:
    + Duyệt qua toàn bộ mảng để dịch chuyển các phần tử về vị trí mới, có thể làm giảm hiệu suất đối với các mảng lớn.

Nhược điểm lớn nhất của 4 hàm trên là thao tác trên phần tử đầu và cuổi của một mảng, nhưng trong mọi trường hợp (average case scenario), những phần tử cần xử lý phần lớn tập trung ở giữa mảng, dẫn đến việc xử dụng những hàm này rất hạn chế.

splice():
    + Ưu điểm:
        - Cho phép thêm, loại bỏ hoặc thay đổi các phần tử của mảng ở bất kỳ vị trí nào.
        - Linh hoạt và mạnh mẽ, có thể thực hiện nhiều loại thay đổi khác nhau trên mảng.
        - Trả về một mảng mới chứa các phần tử đã bị loại bỏ (nếu có).
    + Nhược điểm:
        - Vì là hàm thay đổi mảng gốc Có thể gây ra các thay đổi không mong muốn trên mảng nếu sử dụng không đúng cách.
        - Vì splice() dựa vào index của phần tử nên lại phụ thuộc vào hàm findIndex() ,findLastIndex(), mà các hàm này dùng Linear Search để lặp qua từng phần tử, gọi callback để kiểm tra với điều kiện. Nếu trường hợp mảng có kích thước lớn sẽ ảnh hưởng tới performance.


reverse():
    + Ưu điểm:
        - Đảo ngược thứ tự của các phần tử trong mảng.
        - Dễ sử dụng và hiệu quả cho việc đảo ngược thứ tự của mảng.
    + Nhược điểm:
        - Không trả về một mảng mới mà thay vào đó thay đổi trực tiếp mảng gốc.
        - Có thể làm thay đổi về mặt ngữ cảnh của dữ liệu nếu không được sử dụng đúng cách.

sort(): 
    + Ưu điểm: 
        - Hàm sort() hoạt động hiệu quả và nhanh chóng để sắp xếp các phần tử của mảng.
        - Có thể cung cấp một hàm so sánh tùy chỉnh cho hàm sort() để sắp xếp mảng theo các tiêu chí riêng biệt.
        - Hàm sort() có thể sắp xếp mảng chứa các loại dữ liệu khác nhau như chuỗi, số, và ngày tháng.
    + Nhược điểm:
        - Sắp xếp theo thứ tự Unicode mặc định điều này có thể gây ra kết quả không mong muốn đối với các số hoặc các chuỗi có chứa ký tự chữ số.
        - Không hoạt động chính xác với mọi loại dữ liệu: Đối với một số trường hợp đặc biệt, hàm sort() có thể không hoạt động chính xác hoặc không đáng tin cậy, đặc biệt là đối với các loại dữ liệu phức tạp.
        - sort() không đảm bảo tính ổn định, có thể dẫn đến kết quả không nhất quán khi sắp xếp các phần tử có cùng giá trị.


