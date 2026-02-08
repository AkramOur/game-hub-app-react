import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatform";

interface Props {
  selectedPlatformId?: number;
  onSelectPlatformId: (platform: number) => void;
}

const PlatformSelector = ({
  onSelectPlatformId,
  selectedPlatformId,
}: Props) => {
  const { data, error } = usePlatforms();
  const platform = data?.results.find((p) => p.id === selectedPlatformId);
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatformId(platform.id)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
