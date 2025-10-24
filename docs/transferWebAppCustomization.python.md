# `transferWebAppCustomization` Submodule <a name="`transferWebAppCustomization` Submodule" id="@cdktf/provider-aws.transferWebAppCustomization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransferWebAppCustomization <a name="TransferWebAppCustomization" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/transfer_web_app_customization aws_transfer_web_app_customization}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transfer_web_app_customization

transferWebAppCustomization.TransferWebAppCustomization(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  web_app_id: str,
  favicon_file: str = None,
  logo_file: str = None,
  region: str = None,
  title: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.Initializer.parameter.webAppId">web_app_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/transfer_web_app_customization#web_app_id TransferWebAppCustomization#web_app_id}. |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.Initializer.parameter.faviconFile">favicon_file</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/transfer_web_app_customization#favicon_file TransferWebAppCustomization#favicon_file}. |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.Initializer.parameter.logoFile">logo_file</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/transfer_web_app_customization#logo_file TransferWebAppCustomization#logo_file}. |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.Initializer.parameter.title">title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/transfer_web_app_customization#title TransferWebAppCustomization#title}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `web_app_id`<sup>Required</sup> <a name="web_app_id" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.Initializer.parameter.webAppId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/transfer_web_app_customization#web_app_id TransferWebAppCustomization#web_app_id}.

---

##### `favicon_file`<sup>Optional</sup> <a name="favicon_file" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.Initializer.parameter.faviconFile"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/transfer_web_app_customization#favicon_file TransferWebAppCustomization#favicon_file}.

---

##### `logo_file`<sup>Optional</sup> <a name="logo_file" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.Initializer.parameter.logoFile"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/transfer_web_app_customization#logo_file TransferWebAppCustomization#logo_file}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/transfer_web_app_customization#region TransferWebAppCustomization#region}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.Initializer.parameter.title"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/transfer_web_app_customization#title TransferWebAppCustomization#title}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.resetFaviconFile">reset_favicon_file</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.resetLogoFile">reset_logo_file</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.resetTitle">reset_title</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_favicon_file` <a name="reset_favicon_file" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.resetFaviconFile"></a>

```python
def reset_favicon_file() -> None
```

##### `reset_logo_file` <a name="reset_logo_file" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.resetLogoFile"></a>

```python
def reset_logo_file() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_title` <a name="reset_title" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.resetTitle"></a>

```python
def reset_title() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a TransferWebAppCustomization resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import transfer_web_app_customization

transferWebAppCustomization.TransferWebAppCustomization.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import transfer_web_app_customization

transferWebAppCustomization.TransferWebAppCustomization.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import transfer_web_app_customization

transferWebAppCustomization.TransferWebAppCustomization.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import transfer_web_app_customization

transferWebAppCustomization.TransferWebAppCustomization.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a TransferWebAppCustomization resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the TransferWebAppCustomization to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing TransferWebAppCustomization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/transfer_web_app_customization#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the TransferWebAppCustomization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.faviconFileInput">favicon_file_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.logoFileInput">logo_file_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.webAppIdInput">web_app_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.faviconFile">favicon_file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.logoFile">logo_file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.webAppId">web_app_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `favicon_file_input`<sup>Optional</sup> <a name="favicon_file_input" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.faviconFileInput"></a>

```python
favicon_file_input: str
```

- *Type:* str

---

##### `logo_file_input`<sup>Optional</sup> <a name="logo_file_input" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.logoFileInput"></a>

```python
logo_file_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `web_app_id_input`<sup>Optional</sup> <a name="web_app_id_input" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.webAppIdInput"></a>

```python
web_app_id_input: str
```

- *Type:* str

---

##### `favicon_file`<sup>Required</sup> <a name="favicon_file" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.faviconFile"></a>

```python
favicon_file: str
```

- *Type:* str

---

##### `logo_file`<sup>Required</sup> <a name="logo_file" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.logoFile"></a>

```python
logo_file: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `web_app_id`<sup>Required</sup> <a name="web_app_id" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.webAppId"></a>

```python
web_app_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### TransferWebAppCustomizationConfig <a name="TransferWebAppCustomizationConfig" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transfer_web_app_customization

transferWebAppCustomization.TransferWebAppCustomizationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  web_app_id: str,
  favicon_file: str = None,
  logo_file: str = None,
  region: str = None,
  title: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.webAppId">web_app_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/transfer_web_app_customization#web_app_id TransferWebAppCustomization#web_app_id}. |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.faviconFile">favicon_file</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/transfer_web_app_customization#favicon_file TransferWebAppCustomization#favicon_file}. |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.logoFile">logo_file</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/transfer_web_app_customization#logo_file TransferWebAppCustomization#logo_file}. |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.title">title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/transfer_web_app_customization#title TransferWebAppCustomization#title}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `web_app_id`<sup>Required</sup> <a name="web_app_id" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.webAppId"></a>

```python
web_app_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/transfer_web_app_customization#web_app_id TransferWebAppCustomization#web_app_id}.

---

##### `favicon_file`<sup>Optional</sup> <a name="favicon_file" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.faviconFile"></a>

```python
favicon_file: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/transfer_web_app_customization#favicon_file TransferWebAppCustomization#favicon_file}.

---

##### `logo_file`<sup>Optional</sup> <a name="logo_file" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.logoFile"></a>

```python
logo_file: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/transfer_web_app_customization#logo_file TransferWebAppCustomization#logo_file}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/transfer_web_app_customization#region TransferWebAppCustomization#region}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.title"></a>

```python
title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/transfer_web_app_customization#title TransferWebAppCustomization#title}.

---



