# `bedrockagentcoreGateway` Submodule <a name="`bedrockagentcoreGateway` Submodule" id="@cdktf/provider-aws.bedrockagentcoreGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcoreGateway <a name="BedrockagentcoreGateway" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_gateway aws_bedrockagentcore_gateway}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_gateway

bedrockagentcoreGateway.BedrockagentcoreGateway(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  authorizer_type: str,
  name: str,
  protocol_type: str,
  role_arn: str,
  authorizer_configuration: IResolvable | typing.List[BedrockagentcoreGatewayAuthorizerConfiguration] = None,
  description: str = None,
  exception_level: str = None,
  kms_key_arn: str = None,
  protocol_configuration: IResolvable | typing.List[BedrockagentcoreGatewayProtocolConfiguration] = None,
  region: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: BedrockagentcoreGatewayTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.Initializer.parameter.authorizerType">authorizer_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_gateway#authorizer_type BedrockagentcoreGateway#authorizer_type}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_gateway#name BedrockagentcoreGateway#name}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.Initializer.parameter.protocolType">protocol_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_gateway#protocol_type BedrockagentcoreGateway#protocol_type}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_gateway#role_arn BedrockagentcoreGateway#role_arn}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.Initializer.parameter.authorizerConfiguration">authorizer_configuration</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfiguration">BedrockagentcoreGatewayAuthorizerConfiguration</a>]</code> | authorizer_configuration block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_gateway#description BedrockagentcoreGateway#description}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.Initializer.parameter.exceptionLevel">exception_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_gateway#exception_level BedrockagentcoreGateway#exception_level}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.Initializer.parameter.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_gateway#kms_key_arn BedrockagentcoreGateway#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.Initializer.parameter.protocolConfiguration">protocol_configuration</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfiguration">BedrockagentcoreGatewayProtocolConfiguration</a>]</code> | protocol_configuration block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_gateway#tags BedrockagentcoreGateway#tags}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeouts">BedrockagentcoreGatewayTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `authorizer_type`<sup>Required</sup> <a name="authorizer_type" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.Initializer.parameter.authorizerType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_gateway#authorizer_type BedrockagentcoreGateway#authorizer_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_gateway#name BedrockagentcoreGateway#name}.

---

##### `protocol_type`<sup>Required</sup> <a name="protocol_type" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.Initializer.parameter.protocolType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_gateway#protocol_type BedrockagentcoreGateway#protocol_type}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.Initializer.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_gateway#role_arn BedrockagentcoreGateway#role_arn}.

---

##### `authorizer_configuration`<sup>Optional</sup> <a name="authorizer_configuration" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.Initializer.parameter.authorizerConfiguration"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfiguration">BedrockagentcoreGatewayAuthorizerConfiguration</a>]

authorizer_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_gateway#authorizer_configuration BedrockagentcoreGateway#authorizer_configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_gateway#description BedrockagentcoreGateway#description}.

---

##### `exception_level`<sup>Optional</sup> <a name="exception_level" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.Initializer.parameter.exceptionLevel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_gateway#exception_level BedrockagentcoreGateway#exception_level}.

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.Initializer.parameter.kmsKeyArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_gateway#kms_key_arn BedrockagentcoreGateway#kms_key_arn}.

---

##### `protocol_configuration`<sup>Optional</sup> <a name="protocol_configuration" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.Initializer.parameter.protocolConfiguration"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfiguration">BedrockagentcoreGatewayProtocolConfiguration</a>]

protocol_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_gateway#protocol_configuration BedrockagentcoreGateway#protocol_configuration}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_gateway#region BedrockagentcoreGateway#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_gateway#tags BedrockagentcoreGateway#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeouts">BedrockagentcoreGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_gateway#timeouts BedrockagentcoreGateway#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.putAuthorizerConfiguration">put_authorizer_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.putProtocolConfiguration">put_protocol_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.resetAuthorizerConfiguration">reset_authorizer_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.resetExceptionLevel">reset_exception_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.resetKmsKeyArn">reset_kms_key_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.resetProtocolConfiguration">reset_protocol_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_authorizer_configuration` <a name="put_authorizer_configuration" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.putAuthorizerConfiguration"></a>

```python
def put_authorizer_configuration(
  value: IResolvable | typing.List[BedrockagentcoreGatewayAuthorizerConfiguration]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.putAuthorizerConfiguration.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfiguration">BedrockagentcoreGatewayAuthorizerConfiguration</a>]

---

##### `put_protocol_configuration` <a name="put_protocol_configuration" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.putProtocolConfiguration"></a>

```python
def put_protocol_configuration(
  value: IResolvable | typing.List[BedrockagentcoreGatewayProtocolConfiguration]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.putProtocolConfiguration.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfiguration">BedrockagentcoreGatewayProtocolConfiguration</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_gateway#create BedrockagentcoreGateway#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_gateway#delete BedrockagentcoreGateway#delete}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_gateway#update BedrockagentcoreGateway#update}

---

##### `reset_authorizer_configuration` <a name="reset_authorizer_configuration" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.resetAuthorizerConfiguration"></a>

```python
def reset_authorizer_configuration() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_exception_level` <a name="reset_exception_level" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.resetExceptionLevel"></a>

```python
def reset_exception_level() -> None
```

##### `reset_kms_key_arn` <a name="reset_kms_key_arn" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.resetKmsKeyArn"></a>

```python
def reset_kms_key_arn() -> None
```

##### `reset_protocol_configuration` <a name="reset_protocol_configuration" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.resetProtocolConfiguration"></a>

```python
def reset_protocol_configuration() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a BedrockagentcoreGateway resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_gateway

bedrockagentcoreGateway.BedrockagentcoreGateway.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_gateway

bedrockagentcoreGateway.BedrockagentcoreGateway.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_gateway

bedrockagentcoreGateway.BedrockagentcoreGateway.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_gateway

bedrockagentcoreGateway.BedrockagentcoreGateway.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a BedrockagentcoreGateway resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BedrockagentcoreGateway to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BedrockagentcoreGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BedrockagentcoreGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.authorizerConfiguration">authorizer_configuration</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationList">BedrockagentcoreGatewayAuthorizerConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.gatewayArn">gateway_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.gatewayId">gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.gatewayUrl">gateway_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.protocolConfiguration">protocol_configuration</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationList">BedrockagentcoreGatewayProtocolConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.tagsAll">tags_all</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference">BedrockagentcoreGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.workloadIdentityDetails">workload_identity_details</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsList">BedrockagentcoreGatewayWorkloadIdentityDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.authorizerConfigurationInput">authorizer_configuration_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfiguration">BedrockagentcoreGatewayAuthorizerConfiguration</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.authorizerTypeInput">authorizer_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.exceptionLevelInput">exception_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.protocolConfigurationInput">protocol_configuration_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfiguration">BedrockagentcoreGatewayProtocolConfiguration</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.protocolTypeInput">protocol_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeouts">BedrockagentcoreGatewayTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.authorizerType">authorizer_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.exceptionLevel">exception_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.protocolType">protocol_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `authorizer_configuration`<sup>Required</sup> <a name="authorizer_configuration" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.authorizerConfiguration"></a>

```python
authorizer_configuration: BedrockagentcoreGatewayAuthorizerConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationList">BedrockagentcoreGatewayAuthorizerConfigurationList</a>

---

##### `gateway_arn`<sup>Required</sup> <a name="gateway_arn" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.gatewayArn"></a>

```python
gateway_arn: str
```

- *Type:* str

---

##### `gateway_id`<sup>Required</sup> <a name="gateway_id" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.gatewayId"></a>

```python
gateway_id: str
```

- *Type:* str

---

##### `gateway_url`<sup>Required</sup> <a name="gateway_url" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.gatewayUrl"></a>

```python
gateway_url: str
```

- *Type:* str

---

##### `protocol_configuration`<sup>Required</sup> <a name="protocol_configuration" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.protocolConfiguration"></a>

```python
protocol_configuration: BedrockagentcoreGatewayProtocolConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationList">BedrockagentcoreGatewayProtocolConfigurationList</a>

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.timeouts"></a>

```python
timeouts: BedrockagentcoreGatewayTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference">BedrockagentcoreGatewayTimeoutsOutputReference</a>

---

##### `workload_identity_details`<sup>Required</sup> <a name="workload_identity_details" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.workloadIdentityDetails"></a>

```python
workload_identity_details: BedrockagentcoreGatewayWorkloadIdentityDetailsList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsList">BedrockagentcoreGatewayWorkloadIdentityDetailsList</a>

---

##### `authorizer_configuration_input`<sup>Optional</sup> <a name="authorizer_configuration_input" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.authorizerConfigurationInput"></a>

```python
authorizer_configuration_input: IResolvable | typing.List[BedrockagentcoreGatewayAuthorizerConfiguration]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfiguration">BedrockagentcoreGatewayAuthorizerConfiguration</a>]

---

##### `authorizer_type_input`<sup>Optional</sup> <a name="authorizer_type_input" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.authorizerTypeInput"></a>

```python
authorizer_type_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `exception_level_input`<sup>Optional</sup> <a name="exception_level_input" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.exceptionLevelInput"></a>

```python
exception_level_input: str
```

- *Type:* str

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `protocol_configuration_input`<sup>Optional</sup> <a name="protocol_configuration_input" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.protocolConfigurationInput"></a>

```python
protocol_configuration_input: IResolvable | typing.List[BedrockagentcoreGatewayProtocolConfiguration]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfiguration">BedrockagentcoreGatewayProtocolConfiguration</a>]

---

##### `protocol_type_input`<sup>Optional</sup> <a name="protocol_type_input" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.protocolTypeInput"></a>

```python
protocol_type_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | BedrockagentcoreGatewayTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeouts">BedrockagentcoreGatewayTimeouts</a>

---

##### `authorizer_type`<sup>Required</sup> <a name="authorizer_type" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.authorizerType"></a>

```python
authorizer_type: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `exception_level`<sup>Required</sup> <a name="exception_level" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.exceptionLevel"></a>

```python
exception_level: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `protocol_type`<sup>Required</sup> <a name="protocol_type" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.protocolType"></a>

```python
protocol_type: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcoreGatewayAuthorizerConfiguration <a name="BedrockagentcoreGatewayAuthorizerConfiguration" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_gateway

bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfiguration(
  custom_jwt_authorizer: IResolvable | typing.List[BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfiguration.property.customJwtAuthorizer">custom_jwt_authorizer</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer</a>]</code> | custom_jwt_authorizer block. |

---

##### `custom_jwt_authorizer`<sup>Optional</sup> <a name="custom_jwt_authorizer" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfiguration.property.customJwtAuthorizer"></a>

```python
custom_jwt_authorizer: IResolvable | typing.List[BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer</a>]

custom_jwt_authorizer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_gateway#custom_jwt_authorizer BedrockagentcoreGateway#custom_jwt_authorizer}

---

### BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer <a name="BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_gateway

bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer(
  discovery_url: str,
  allowed_audience: typing.List[str] = None,
  allowed_clients: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer.property.discoveryUrl">discovery_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_gateway#discovery_url BedrockagentcoreGateway#discovery_url}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer.property.allowedAudience">allowed_audience</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_gateway#allowed_audience BedrockagentcoreGateway#allowed_audience}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer.property.allowedClients">allowed_clients</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_gateway#allowed_clients BedrockagentcoreGateway#allowed_clients}. |

---

##### `discovery_url`<sup>Required</sup> <a name="discovery_url" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer.property.discoveryUrl"></a>

```python
discovery_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_gateway#discovery_url BedrockagentcoreGateway#discovery_url}.

---

##### `allowed_audience`<sup>Optional</sup> <a name="allowed_audience" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer.property.allowedAudience"></a>

```python
allowed_audience: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_gateway#allowed_audience BedrockagentcoreGateway#allowed_audience}.

---

##### `allowed_clients`<sup>Optional</sup> <a name="allowed_clients" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer.property.allowedClients"></a>

```python
allowed_clients: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_gateway#allowed_clients BedrockagentcoreGateway#allowed_clients}.

---

### BedrockagentcoreGatewayConfig <a name="BedrockagentcoreGatewayConfig" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_gateway

bedrockagentcoreGateway.BedrockagentcoreGatewayConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  authorizer_type: str,
  name: str,
  protocol_type: str,
  role_arn: str,
  authorizer_configuration: IResolvable | typing.List[BedrockagentcoreGatewayAuthorizerConfiguration] = None,
  description: str = None,
  exception_level: str = None,
  kms_key_arn: str = None,
  protocol_configuration: IResolvable | typing.List[BedrockagentcoreGatewayProtocolConfiguration] = None,
  region: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: BedrockagentcoreGatewayTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.authorizerType">authorizer_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_gateway#authorizer_type BedrockagentcoreGateway#authorizer_type}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_gateway#name BedrockagentcoreGateway#name}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.protocolType">protocol_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_gateway#protocol_type BedrockagentcoreGateway#protocol_type}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_gateway#role_arn BedrockagentcoreGateway#role_arn}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.authorizerConfiguration">authorizer_configuration</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfiguration">BedrockagentcoreGatewayAuthorizerConfiguration</a>]</code> | authorizer_configuration block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_gateway#description BedrockagentcoreGateway#description}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.exceptionLevel">exception_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_gateway#exception_level BedrockagentcoreGateway#exception_level}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_gateway#kms_key_arn BedrockagentcoreGateway#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.protocolConfiguration">protocol_configuration</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfiguration">BedrockagentcoreGatewayProtocolConfiguration</a>]</code> | protocol_configuration block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_gateway#tags BedrockagentcoreGateway#tags}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeouts">BedrockagentcoreGatewayTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `authorizer_type`<sup>Required</sup> <a name="authorizer_type" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.authorizerType"></a>

```python
authorizer_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_gateway#authorizer_type BedrockagentcoreGateway#authorizer_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_gateway#name BedrockagentcoreGateway#name}.

---

##### `protocol_type`<sup>Required</sup> <a name="protocol_type" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.protocolType"></a>

```python
protocol_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_gateway#protocol_type BedrockagentcoreGateway#protocol_type}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_gateway#role_arn BedrockagentcoreGateway#role_arn}.

---

##### `authorizer_configuration`<sup>Optional</sup> <a name="authorizer_configuration" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.authorizerConfiguration"></a>

```python
authorizer_configuration: IResolvable | typing.List[BedrockagentcoreGatewayAuthorizerConfiguration]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfiguration">BedrockagentcoreGatewayAuthorizerConfiguration</a>]

authorizer_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_gateway#authorizer_configuration BedrockagentcoreGateway#authorizer_configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_gateway#description BedrockagentcoreGateway#description}.

---

##### `exception_level`<sup>Optional</sup> <a name="exception_level" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.exceptionLevel"></a>

```python
exception_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_gateway#exception_level BedrockagentcoreGateway#exception_level}.

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_gateway#kms_key_arn BedrockagentcoreGateway#kms_key_arn}.

---

##### `protocol_configuration`<sup>Optional</sup> <a name="protocol_configuration" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.protocolConfiguration"></a>

```python
protocol_configuration: IResolvable | typing.List[BedrockagentcoreGatewayProtocolConfiguration]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfiguration">BedrockagentcoreGatewayProtocolConfiguration</a>]

protocol_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_gateway#protocol_configuration BedrockagentcoreGateway#protocol_configuration}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_gateway#region BedrockagentcoreGateway#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_gateway#tags BedrockagentcoreGateway#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.timeouts"></a>

```python
timeouts: BedrockagentcoreGatewayTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeouts">BedrockagentcoreGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_gateway#timeouts BedrockagentcoreGateway#timeouts}

---

### BedrockagentcoreGatewayProtocolConfiguration <a name="BedrockagentcoreGatewayProtocolConfiguration" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_gateway

bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfiguration(
  mcp: IResolvable | typing.List[BedrockagentcoreGatewayProtocolConfigurationMcp] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfiguration.property.mcp">mcp</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp">BedrockagentcoreGatewayProtocolConfigurationMcp</a>]</code> | mcp block. |

---

##### `mcp`<sup>Optional</sup> <a name="mcp" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfiguration.property.mcp"></a>

```python
mcp: IResolvable | typing.List[BedrockagentcoreGatewayProtocolConfigurationMcp]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp">BedrockagentcoreGatewayProtocolConfigurationMcp</a>]

mcp block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_gateway#mcp BedrockagentcoreGateway#mcp}

---

### BedrockagentcoreGatewayProtocolConfigurationMcp <a name="BedrockagentcoreGatewayProtocolConfigurationMcp" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_gateway

bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp(
  instructions: str = None,
  search_type: str = None,
  supported_versions: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp.property.instructions">instructions</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_gateway#instructions BedrockagentcoreGateway#instructions}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp.property.searchType">search_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_gateway#search_type BedrockagentcoreGateway#search_type}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp.property.supportedVersions">supported_versions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_gateway#supported_versions BedrockagentcoreGateway#supported_versions}. |

---

##### `instructions`<sup>Optional</sup> <a name="instructions" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp.property.instructions"></a>

```python
instructions: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_gateway#instructions BedrockagentcoreGateway#instructions}.

---

##### `search_type`<sup>Optional</sup> <a name="search_type" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp.property.searchType"></a>

```python
search_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_gateway#search_type BedrockagentcoreGateway#search_type}.

---

##### `supported_versions`<sup>Optional</sup> <a name="supported_versions" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp.property.supportedVersions"></a>

```python
supported_versions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_gateway#supported_versions BedrockagentcoreGateway#supported_versions}.

---

### BedrockagentcoreGatewayTimeouts <a name="BedrockagentcoreGatewayTimeouts" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_gateway

bedrockagentcoreGateway.BedrockagentcoreGatewayTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_gateway#create BedrockagentcoreGateway#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_gateway#delete BedrockagentcoreGateway#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_gateway#update BedrockagentcoreGateway#update}

---

### BedrockagentcoreGatewayWorkloadIdentityDetails <a name="BedrockagentcoreGatewayWorkloadIdentityDetails" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetails.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_gateway

bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetails()
```


## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerList <a name="BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerList" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_gateway

bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer</a>]

---


### BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference <a name="BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_gateway

bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedAudience">reset_allowed_audience</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedClients">reset_allowed_clients</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allowed_audience` <a name="reset_allowed_audience" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedAudience"></a>

```python
def reset_allowed_audience() -> None
```

##### `reset_allowed_clients` <a name="reset_allowed_clients" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedClients"></a>

```python
def reset_allowed_clients() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedAudienceInput">allowed_audience_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedClientsInput">allowed_clients_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.discoveryUrlInput">discovery_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedAudience">allowed_audience</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedClients">allowed_clients</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.discoveryUrl">discovery_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_audience_input`<sup>Optional</sup> <a name="allowed_audience_input" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedAudienceInput"></a>

```python
allowed_audience_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_clients_input`<sup>Optional</sup> <a name="allowed_clients_input" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedClientsInput"></a>

```python
allowed_clients_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `discovery_url_input`<sup>Optional</sup> <a name="discovery_url_input" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.discoveryUrlInput"></a>

```python
discovery_url_input: str
```

- *Type:* str

---

##### `allowed_audience`<sup>Required</sup> <a name="allowed_audience" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedAudience"></a>

```python
allowed_audience: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_clients`<sup>Required</sup> <a name="allowed_clients" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedClients"></a>

```python
allowed_clients: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `discovery_url`<sup>Required</sup> <a name="discovery_url" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.discoveryUrl"></a>

```python
discovery_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer</a>

---


### BedrockagentcoreGatewayAuthorizerConfigurationList <a name="BedrockagentcoreGatewayAuthorizerConfigurationList" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_gateway

bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreGatewayAuthorizerConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfiguration">BedrockagentcoreGatewayAuthorizerConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockagentcoreGatewayAuthorizerConfiguration]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfiguration">BedrockagentcoreGatewayAuthorizerConfiguration</a>]

---


### BedrockagentcoreGatewayAuthorizerConfigurationOutputReference <a name="BedrockagentcoreGatewayAuthorizerConfigurationOutputReference" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_gateway

bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.putCustomJwtAuthorizer">put_custom_jwt_authorizer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.resetCustomJwtAuthorizer">reset_custom_jwt_authorizer</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom_jwt_authorizer` <a name="put_custom_jwt_authorizer" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.putCustomJwtAuthorizer"></a>

```python
def put_custom_jwt_authorizer(
  value: IResolvable | typing.List[BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.putCustomJwtAuthorizer.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer</a>]

---

##### `reset_custom_jwt_authorizer` <a name="reset_custom_jwt_authorizer" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.resetCustomJwtAuthorizer"></a>

```python
def reset_custom_jwt_authorizer() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.property.customJwtAuthorizer">custom_jwt_authorizer</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerList">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.property.customJwtAuthorizerInput">custom_jwt_authorizer_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfiguration">BedrockagentcoreGatewayAuthorizerConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_jwt_authorizer`<sup>Required</sup> <a name="custom_jwt_authorizer" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.property.customJwtAuthorizer"></a>

```python
custom_jwt_authorizer: BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerList">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerList</a>

---

##### `custom_jwt_authorizer_input`<sup>Optional</sup> <a name="custom_jwt_authorizer_input" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.property.customJwtAuthorizerInput"></a>

```python
custom_jwt_authorizer_input: IResolvable | typing.List[BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreGatewayAuthorizerConfiguration
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfiguration">BedrockagentcoreGatewayAuthorizerConfiguration</a>

---


### BedrockagentcoreGatewayProtocolConfigurationList <a name="BedrockagentcoreGatewayProtocolConfigurationList" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_gateway

bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreGatewayProtocolConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfiguration">BedrockagentcoreGatewayProtocolConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockagentcoreGatewayProtocolConfiguration]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfiguration">BedrockagentcoreGatewayProtocolConfiguration</a>]

---


### BedrockagentcoreGatewayProtocolConfigurationMcpList <a name="BedrockagentcoreGatewayProtocolConfigurationMcpList" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_gateway

bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp">BedrockagentcoreGatewayProtocolConfigurationMcp</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockagentcoreGatewayProtocolConfigurationMcp]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp">BedrockagentcoreGatewayProtocolConfigurationMcp</a>]

---


### BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference <a name="BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_gateway

bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.resetInstructions">reset_instructions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.resetSearchType">reset_search_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.resetSupportedVersions">reset_supported_versions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_instructions` <a name="reset_instructions" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.resetInstructions"></a>

```python
def reset_instructions() -> None
```

##### `reset_search_type` <a name="reset_search_type" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.resetSearchType"></a>

```python
def reset_search_type() -> None
```

##### `reset_supported_versions` <a name="reset_supported_versions" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.resetSupportedVersions"></a>

```python
def reset_supported_versions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.instructionsInput">instructions_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.searchTypeInput">search_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.supportedVersionsInput">supported_versions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.instructions">instructions</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.searchType">search_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.supportedVersions">supported_versions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp">BedrockagentcoreGatewayProtocolConfigurationMcp</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `instructions_input`<sup>Optional</sup> <a name="instructions_input" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.instructionsInput"></a>

```python
instructions_input: str
```

- *Type:* str

---

##### `search_type_input`<sup>Optional</sup> <a name="search_type_input" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.searchTypeInput"></a>

```python
search_type_input: str
```

- *Type:* str

---

##### `supported_versions_input`<sup>Optional</sup> <a name="supported_versions_input" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.supportedVersionsInput"></a>

```python
supported_versions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `instructions`<sup>Required</sup> <a name="instructions" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.instructions"></a>

```python
instructions: str
```

- *Type:* str

---

##### `search_type`<sup>Required</sup> <a name="search_type" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.searchType"></a>

```python
search_type: str
```

- *Type:* str

---

##### `supported_versions`<sup>Required</sup> <a name="supported_versions" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.supportedVersions"></a>

```python
supported_versions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreGatewayProtocolConfigurationMcp
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp">BedrockagentcoreGatewayProtocolConfigurationMcp</a>

---


### BedrockagentcoreGatewayProtocolConfigurationOutputReference <a name="BedrockagentcoreGatewayProtocolConfigurationOutputReference" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_gateway

bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.putMcp">put_mcp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.resetMcp">reset_mcp</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_mcp` <a name="put_mcp" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.putMcp"></a>

```python
def put_mcp(
  value: IResolvable | typing.List[BedrockagentcoreGatewayProtocolConfigurationMcp]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.putMcp.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp">BedrockagentcoreGatewayProtocolConfigurationMcp</a>]

---

##### `reset_mcp` <a name="reset_mcp" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.resetMcp"></a>

```python
def reset_mcp() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.property.mcp">mcp</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpList">BedrockagentcoreGatewayProtocolConfigurationMcpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.property.mcpInput">mcp_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp">BedrockagentcoreGatewayProtocolConfigurationMcp</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfiguration">BedrockagentcoreGatewayProtocolConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mcp`<sup>Required</sup> <a name="mcp" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.property.mcp"></a>

```python
mcp: BedrockagentcoreGatewayProtocolConfigurationMcpList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpList">BedrockagentcoreGatewayProtocolConfigurationMcpList</a>

---

##### `mcp_input`<sup>Optional</sup> <a name="mcp_input" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.property.mcpInput"></a>

```python
mcp_input: IResolvable | typing.List[BedrockagentcoreGatewayProtocolConfigurationMcp]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp">BedrockagentcoreGatewayProtocolConfigurationMcp</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreGatewayProtocolConfiguration
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfiguration">BedrockagentcoreGatewayProtocolConfiguration</a>

---


### BedrockagentcoreGatewayTimeoutsOutputReference <a name="BedrockagentcoreGatewayTimeoutsOutputReference" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_gateway

bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeouts">BedrockagentcoreGatewayTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreGatewayTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeouts">BedrockagentcoreGatewayTimeouts</a>

---


### BedrockagentcoreGatewayWorkloadIdentityDetailsList <a name="BedrockagentcoreGatewayWorkloadIdentityDetailsList" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_gateway

bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference <a name="BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_gateway

bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.property.workloadIdentityArn">workload_identity_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetails">BedrockagentcoreGatewayWorkloadIdentityDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workload_identity_arn`<sup>Required</sup> <a name="workload_identity_arn" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.property.workloadIdentityArn"></a>

```python
workload_identity_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.property.internalValue"></a>

```python
internal_value: BedrockagentcoreGatewayWorkloadIdentityDetails
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetails">BedrockagentcoreGatewayWorkloadIdentityDetails</a>

---



