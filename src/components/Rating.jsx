import StarIcon from "./svg/StarIcon"

 const Rating = ({ number }) => {
    switch (number) {
      case "1":
        return (
          <div className="flex">
            <StarIcon />
          </div>
        )
      case "2":
        return (
          <div className="flex">
            <StarIcon />
            <StarIcon />
          </div>
        )
      case "3":
        return (
          <div className="flex">
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
        )
      case "4":
        return (
          <div className="flex">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
        )
      case "5":
        return (
          <div className="flex">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
        )
    }
  }

export default Rating