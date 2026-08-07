# `bedrockagentcoreOnlineEvaluationConfig` Submodule <a name="`bedrockagentcoreOnlineEvaluationConfig` Submodule" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcoreOnlineEvaluationConfig <a name="BedrockagentcoreOnlineEvaluationConfig" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_online_evaluation_config aws_bedrockagentcore_online_evaluation_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_online_evaluation_config

bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  enable_on_create: bool | IResolvable,
  evaluation_execution_role_arn: str,
  online_evaluation_config_name: str,
  data_source_config: IResolvable | typing.List[BedrockagentcoreOnlineEvaluationConfigDataSourceConfig] = None,
  description: str = None,
  evaluator: IResolvable | typing.List[BedrockagentcoreOnlineEvaluationConfigEvaluator] = None,
  execution_status: str = None,
  region: str = None,
  rule: IResolvable | typing.List[BedrockagentcoreOnlineEvaluationConfigRule] = None,
  tags: typing.Mapping[str] = None,
  timeouts: BedrockagentcoreOnlineEvaluationConfigTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.enableOnCreate">enable_on_create</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_online_evaluation_config#enable_on_create BedrockagentcoreOnlineEvaluationConfig#enable_on_create}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.evaluationExecutionRoleArn">evaluation_execution_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_online_evaluation_config#evaluation_execution_role_arn BedrockagentcoreOnlineEvaluationConfig#evaluation_execution_role_arn}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.onlineEvaluationConfigName">online_evaluation_config_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_online_evaluation_config#online_evaluation_config_name BedrockagentcoreOnlineEvaluationConfig#online_evaluation_config_name}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.dataSourceConfig">data_source_config</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfig">BedrockagentcoreOnlineEvaluationConfigDataSourceConfig</a>]</code> | data_source_config block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_online_evaluation_config#description BedrockagentcoreOnlineEvaluationConfig#description}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.evaluator">evaluator</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluator">BedrockagentcoreOnlineEvaluationConfigEvaluator</a>]</code> | evaluator block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.executionStatus">execution_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_online_evaluation_config#execution_status BedrockagentcoreOnlineEvaluationConfig#execution_status}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.rule">rule</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule">BedrockagentcoreOnlineEvaluationConfigRule</a>]</code> | rule block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_online_evaluation_config#tags BedrockagentcoreOnlineEvaluationConfig#tags}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeouts">BedrockagentcoreOnlineEvaluationConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `enable_on_create`<sup>Required</sup> <a name="enable_on_create" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.enableOnCreate"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_online_evaluation_config#enable_on_create BedrockagentcoreOnlineEvaluationConfig#enable_on_create}.

---

##### `evaluation_execution_role_arn`<sup>Required</sup> <a name="evaluation_execution_role_arn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.evaluationExecutionRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_online_evaluation_config#evaluation_execution_role_arn BedrockagentcoreOnlineEvaluationConfig#evaluation_execution_role_arn}.

---

##### `online_evaluation_config_name`<sup>Required</sup> <a name="online_evaluation_config_name" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.onlineEvaluationConfigName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_online_evaluation_config#online_evaluation_config_name BedrockagentcoreOnlineEvaluationConfig#online_evaluation_config_name}.

---

##### `data_source_config`<sup>Optional</sup> <a name="data_source_config" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.dataSourceConfig"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfig">BedrockagentcoreOnlineEvaluationConfigDataSourceConfig</a>]

data_source_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_online_evaluation_config#data_source_config BedrockagentcoreOnlineEvaluationConfig#data_source_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_online_evaluation_config#description BedrockagentcoreOnlineEvaluationConfig#description}.

---

##### `evaluator`<sup>Optional</sup> <a name="evaluator" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.evaluator"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluator">BedrockagentcoreOnlineEvaluationConfigEvaluator</a>]

evaluator block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_online_evaluation_config#evaluator BedrockagentcoreOnlineEvaluationConfig#evaluator}

---

##### `execution_status`<sup>Optional</sup> <a name="execution_status" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.executionStatus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_online_evaluation_config#execution_status BedrockagentcoreOnlineEvaluationConfig#execution_status}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_online_evaluation_config#region BedrockagentcoreOnlineEvaluationConfig#region}

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.rule"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule">BedrockagentcoreOnlineEvaluationConfigRule</a>]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_online_evaluation_config#rule BedrockagentcoreOnlineEvaluationConfig#rule}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_online_evaluation_config#tags BedrockagentcoreOnlineEvaluationConfig#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeouts">BedrockagentcoreOnlineEvaluationConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_online_evaluation_config#timeouts BedrockagentcoreOnlineEvaluationConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putDataSourceConfig">put_data_source_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putEvaluator">put_evaluator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putRule">put_rule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetDataSourceConfig">reset_data_source_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetEvaluator">reset_evaluator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetExecutionStatus">reset_execution_status</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetRule">reset_rule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_data_source_config` <a name="put_data_source_config" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putDataSourceConfig"></a>

```python
def put_data_source_config(
  value: IResolvable | typing.List[BedrockagentcoreOnlineEvaluationConfigDataSourceConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putDataSourceConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfig">BedrockagentcoreOnlineEvaluationConfigDataSourceConfig</a>]

---

##### `put_evaluator` <a name="put_evaluator" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putEvaluator"></a>

```python
def put_evaluator(
  value: IResolvable | typing.List[BedrockagentcoreOnlineEvaluationConfigEvaluator]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putEvaluator.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluator">BedrockagentcoreOnlineEvaluationConfigEvaluator</a>]

---

##### `put_rule` <a name="put_rule" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putRule"></a>

```python
def put_rule(
  value: IResolvable | typing.List[BedrockagentcoreOnlineEvaluationConfigRule]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putRule.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule">BedrockagentcoreOnlineEvaluationConfigRule</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_online_evaluation_config#create BedrockagentcoreOnlineEvaluationConfig#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_online_evaluation_config#delete BedrockagentcoreOnlineEvaluationConfig#delete}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_online_evaluation_config#update BedrockagentcoreOnlineEvaluationConfig#update}

---

##### `reset_data_source_config` <a name="reset_data_source_config" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetDataSourceConfig"></a>

```python
def reset_data_source_config() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_evaluator` <a name="reset_evaluator" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetEvaluator"></a>

```python
def reset_evaluator() -> None
```

##### `reset_execution_status` <a name="reset_execution_status" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetExecutionStatus"></a>

```python
def reset_execution_status() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_rule` <a name="reset_rule" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetRule"></a>

```python
def reset_rule() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a BedrockagentcoreOnlineEvaluationConfig resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.isConstruct"></a>

```python
from cdktn_provider_aws import bedrockagentcore_online_evaluation_config

bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.isTerraformElement"></a>

```python
from cdktn_provider_aws import bedrockagentcore_online_evaluation_config

bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.isTerraformResource"></a>

```python
from cdktn_provider_aws import bedrockagentcore_online_evaluation_config

bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.generateConfigForImport"></a>

```python
from cdktn_provider_aws import bedrockagentcore_online_evaluation_config

bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a BedrockagentcoreOnlineEvaluationConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BedrockagentcoreOnlineEvaluationConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BedrockagentcoreOnlineEvaluationConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_online_evaluation_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BedrockagentcoreOnlineEvaluationConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.dataSourceConfig">data_source_config</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList">BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.evaluator">evaluator</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList">BedrockagentcoreOnlineEvaluationConfigEvaluatorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.onlineEvaluationConfigArn">online_evaluation_config_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.onlineEvaluationConfigId">online_evaluation_config_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.outputConfig">output_config</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList">BedrockagentcoreOnlineEvaluationConfigOutputConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList">BedrockagentcoreOnlineEvaluationConfigRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.tagsAll">tags_all</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference">BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.dataSourceConfigInput">data_source_config_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfig">BedrockagentcoreOnlineEvaluationConfigDataSourceConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.enableOnCreateInput">enable_on_create_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.evaluationExecutionRoleArnInput">evaluation_execution_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.evaluatorInput">evaluator_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluator">BedrockagentcoreOnlineEvaluationConfigEvaluator</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.executionStatusInput">execution_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.onlineEvaluationConfigNameInput">online_evaluation_config_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.ruleInput">rule_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule">BedrockagentcoreOnlineEvaluationConfigRule</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeouts">BedrockagentcoreOnlineEvaluationConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.enableOnCreate">enable_on_create</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.evaluationExecutionRoleArn">evaluation_execution_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.executionStatus">execution_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.onlineEvaluationConfigName">online_evaluation_config_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `data_source_config`<sup>Required</sup> <a name="data_source_config" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.dataSourceConfig"></a>

```python
data_source_config: BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList">BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList</a>

---

##### `evaluator`<sup>Required</sup> <a name="evaluator" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.evaluator"></a>

```python
evaluator: BedrockagentcoreOnlineEvaluationConfigEvaluatorList
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList">BedrockagentcoreOnlineEvaluationConfigEvaluatorList</a>

---

##### `online_evaluation_config_arn`<sup>Required</sup> <a name="online_evaluation_config_arn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.onlineEvaluationConfigArn"></a>

```python
online_evaluation_config_arn: str
```

- *Type:* str

---

##### `online_evaluation_config_id`<sup>Required</sup> <a name="online_evaluation_config_id" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.onlineEvaluationConfigId"></a>

```python
online_evaluation_config_id: str
```

- *Type:* str

---

##### `output_config`<sup>Required</sup> <a name="output_config" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.outputConfig"></a>

```python
output_config: BedrockagentcoreOnlineEvaluationConfigOutputConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList">BedrockagentcoreOnlineEvaluationConfigOutputConfigList</a>

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.rule"></a>

```python
rule: BedrockagentcoreOnlineEvaluationConfigRuleList
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList">BedrockagentcoreOnlineEvaluationConfigRuleList</a>

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.timeouts"></a>

```python
timeouts: BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference">BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference</a>

---

##### `data_source_config_input`<sup>Optional</sup> <a name="data_source_config_input" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.dataSourceConfigInput"></a>

```python
data_source_config_input: IResolvable | typing.List[BedrockagentcoreOnlineEvaluationConfigDataSourceConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfig">BedrockagentcoreOnlineEvaluationConfigDataSourceConfig</a>]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enable_on_create_input`<sup>Optional</sup> <a name="enable_on_create_input" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.enableOnCreateInput"></a>

```python
enable_on_create_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `evaluation_execution_role_arn_input`<sup>Optional</sup> <a name="evaluation_execution_role_arn_input" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.evaluationExecutionRoleArnInput"></a>

```python
evaluation_execution_role_arn_input: str
```

- *Type:* str

---

##### `evaluator_input`<sup>Optional</sup> <a name="evaluator_input" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.evaluatorInput"></a>

```python
evaluator_input: IResolvable | typing.List[BedrockagentcoreOnlineEvaluationConfigEvaluator]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluator">BedrockagentcoreOnlineEvaluationConfigEvaluator</a>]

---

##### `execution_status_input`<sup>Optional</sup> <a name="execution_status_input" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.executionStatusInput"></a>

```python
execution_status_input: str
```

- *Type:* str

---

##### `online_evaluation_config_name_input`<sup>Optional</sup> <a name="online_evaluation_config_name_input" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.onlineEvaluationConfigNameInput"></a>

```python
online_evaluation_config_name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.ruleInput"></a>

```python
rule_input: IResolvable | typing.List[BedrockagentcoreOnlineEvaluationConfigRule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule">BedrockagentcoreOnlineEvaluationConfigRule</a>]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | BedrockagentcoreOnlineEvaluationConfigTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeouts">BedrockagentcoreOnlineEvaluationConfigTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enable_on_create`<sup>Required</sup> <a name="enable_on_create" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.enableOnCreate"></a>

```python
enable_on_create: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `evaluation_execution_role_arn`<sup>Required</sup> <a name="evaluation_execution_role_arn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.evaluationExecutionRoleArn"></a>

```python
evaluation_execution_role_arn: str
```

- *Type:* str

---

##### `execution_status`<sup>Required</sup> <a name="execution_status" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.executionStatus"></a>

```python
execution_status: str
```

- *Type:* str

---

##### `online_evaluation_config_name`<sup>Required</sup> <a name="online_evaluation_config_name" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.onlineEvaluationConfigName"></a>

```python
online_evaluation_config_name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcoreOnlineEvaluationConfigConfig <a name="BedrockagentcoreOnlineEvaluationConfigConfig" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_online_evaluation_config

bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  enable_on_create: bool | IResolvable,
  evaluation_execution_role_arn: str,
  online_evaluation_config_name: str,
  data_source_config: IResolvable | typing.List[BedrockagentcoreOnlineEvaluationConfigDataSourceConfig] = None,
  description: str = None,
  evaluator: IResolvable | typing.List[BedrockagentcoreOnlineEvaluationConfigEvaluator] = None,
  execution_status: str = None,
  region: str = None,
  rule: IResolvable | typing.List[BedrockagentcoreOnlineEvaluationConfigRule] = None,
  tags: typing.Mapping[str] = None,
  timeouts: BedrockagentcoreOnlineEvaluationConfigTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.enableOnCreate">enable_on_create</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_online_evaluation_config#enable_on_create BedrockagentcoreOnlineEvaluationConfig#enable_on_create}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.evaluationExecutionRoleArn">evaluation_execution_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_online_evaluation_config#evaluation_execution_role_arn BedrockagentcoreOnlineEvaluationConfig#evaluation_execution_role_arn}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.onlineEvaluationConfigName">online_evaluation_config_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_online_evaluation_config#online_evaluation_config_name BedrockagentcoreOnlineEvaluationConfig#online_evaluation_config_name}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.dataSourceConfig">data_source_config</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfig">BedrockagentcoreOnlineEvaluationConfigDataSourceConfig</a>]</code> | data_source_config block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_online_evaluation_config#description BedrockagentcoreOnlineEvaluationConfig#description}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.evaluator">evaluator</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluator">BedrockagentcoreOnlineEvaluationConfigEvaluator</a>]</code> | evaluator block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.executionStatus">execution_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_online_evaluation_config#execution_status BedrockagentcoreOnlineEvaluationConfig#execution_status}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.rule">rule</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule">BedrockagentcoreOnlineEvaluationConfigRule</a>]</code> | rule block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_online_evaluation_config#tags BedrockagentcoreOnlineEvaluationConfig#tags}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeouts">BedrockagentcoreOnlineEvaluationConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `enable_on_create`<sup>Required</sup> <a name="enable_on_create" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.enableOnCreate"></a>

```python
enable_on_create: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_online_evaluation_config#enable_on_create BedrockagentcoreOnlineEvaluationConfig#enable_on_create}.

---

##### `evaluation_execution_role_arn`<sup>Required</sup> <a name="evaluation_execution_role_arn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.evaluationExecutionRoleArn"></a>

```python
evaluation_execution_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_online_evaluation_config#evaluation_execution_role_arn BedrockagentcoreOnlineEvaluationConfig#evaluation_execution_role_arn}.

---

##### `online_evaluation_config_name`<sup>Required</sup> <a name="online_evaluation_config_name" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.onlineEvaluationConfigName"></a>

```python
online_evaluation_config_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_online_evaluation_config#online_evaluation_config_name BedrockagentcoreOnlineEvaluationConfig#online_evaluation_config_name}.

---

##### `data_source_config`<sup>Optional</sup> <a name="data_source_config" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.dataSourceConfig"></a>

```python
data_source_config: IResolvable | typing.List[BedrockagentcoreOnlineEvaluationConfigDataSourceConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfig">BedrockagentcoreOnlineEvaluationConfigDataSourceConfig</a>]

data_source_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_online_evaluation_config#data_source_config BedrockagentcoreOnlineEvaluationConfig#data_source_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_online_evaluation_config#description BedrockagentcoreOnlineEvaluationConfig#description}.

---

##### `evaluator`<sup>Optional</sup> <a name="evaluator" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.evaluator"></a>

```python
evaluator: IResolvable | typing.List[BedrockagentcoreOnlineEvaluationConfigEvaluator]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluator">BedrockagentcoreOnlineEvaluationConfigEvaluator</a>]

evaluator block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_online_evaluation_config#evaluator BedrockagentcoreOnlineEvaluationConfig#evaluator}

---

##### `execution_status`<sup>Optional</sup> <a name="execution_status" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.executionStatus"></a>

```python
execution_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_online_evaluation_config#execution_status BedrockagentcoreOnlineEvaluationConfig#execution_status}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_online_evaluation_config#region BedrockagentcoreOnlineEvaluationConfig#region}

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.rule"></a>

```python
rule: IResolvable | typing.List[BedrockagentcoreOnlineEvaluationConfigRule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule">BedrockagentcoreOnlineEvaluationConfigRule</a>]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_online_evaluation_config#rule BedrockagentcoreOnlineEvaluationConfig#rule}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_online_evaluation_config#tags BedrockagentcoreOnlineEvaluationConfig#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.timeouts"></a>

```python
timeouts: BedrockagentcoreOnlineEvaluationConfigTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeouts">BedrockagentcoreOnlineEvaluationConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_online_evaluation_config#timeouts BedrockagentcoreOnlineEvaluationConfig#timeouts}

---

### BedrockagentcoreOnlineEvaluationConfigDataSourceConfig <a name="BedrockagentcoreOnlineEvaluationConfigDataSourceConfig" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfig.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_online_evaluation_config

bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfig(
  cloudwatch_logs: IResolvable | typing.List[BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfig.property.cloudwatchLogs">cloudwatch_logs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs">BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs</a>]</code> | cloudwatch_logs block. |

---

##### `cloudwatch_logs`<sup>Optional</sup> <a name="cloudwatch_logs" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfig.property.cloudwatchLogs"></a>

```python
cloudwatch_logs: IResolvable | typing.List[BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs">BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs</a>]

cloudwatch_logs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_online_evaluation_config#cloudwatch_logs BedrockagentcoreOnlineEvaluationConfig#cloudwatch_logs}

---

### BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs <a name="BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_online_evaluation_config

bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs(
  log_group_names: typing.List[str],
  service_names: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs.property.logGroupNames">log_group_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_online_evaluation_config#log_group_names BedrockagentcoreOnlineEvaluationConfig#log_group_names}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs.property.serviceNames">service_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_online_evaluation_config#service_names BedrockagentcoreOnlineEvaluationConfig#service_names}. |

---

##### `log_group_names`<sup>Required</sup> <a name="log_group_names" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs.property.logGroupNames"></a>

```python
log_group_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_online_evaluation_config#log_group_names BedrockagentcoreOnlineEvaluationConfig#log_group_names}.

---

##### `service_names`<sup>Required</sup> <a name="service_names" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs.property.serviceNames"></a>

```python
service_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_online_evaluation_config#service_names BedrockagentcoreOnlineEvaluationConfig#service_names}.

---

### BedrockagentcoreOnlineEvaluationConfigEvaluator <a name="BedrockagentcoreOnlineEvaluationConfigEvaluator" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluator"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluator.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_online_evaluation_config

bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluator(
  evaluator_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluator.property.evaluatorId">evaluator_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_online_evaluation_config#evaluator_id BedrockagentcoreOnlineEvaluationConfig#evaluator_id}. |

---

##### `evaluator_id`<sup>Required</sup> <a name="evaluator_id" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluator.property.evaluatorId"></a>

```python
evaluator_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_online_evaluation_config#evaluator_id BedrockagentcoreOnlineEvaluationConfig#evaluator_id}.

---

### BedrockagentcoreOnlineEvaluationConfigOutputConfig <a name="BedrockagentcoreOnlineEvaluationConfigOutputConfig" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfig.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_online_evaluation_config

bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfig()
```


### BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig <a name="BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_online_evaluation_config

bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig()
```


### BedrockagentcoreOnlineEvaluationConfigRule <a name="BedrockagentcoreOnlineEvaluationConfigRule" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_online_evaluation_config

bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule(
  filter: IResolvable | typing.List[BedrockagentcoreOnlineEvaluationConfigRuleFilter] = None,
  sampling_config: IResolvable | typing.List[BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig] = None,
  session_config: IResolvable | typing.List[BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule.property.filter">filter</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilter">BedrockagentcoreOnlineEvaluationConfigRuleFilter</a>]</code> | filter block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule.property.samplingConfig">sampling_config</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig">BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig</a>]</code> | sampling_config block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule.property.sessionConfig">session_config</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig">BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig</a>]</code> | session_config block. |

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule.property.filter"></a>

```python
filter: IResolvable | typing.List[BedrockagentcoreOnlineEvaluationConfigRuleFilter]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilter">BedrockagentcoreOnlineEvaluationConfigRuleFilter</a>]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_online_evaluation_config#filter BedrockagentcoreOnlineEvaluationConfig#filter}

---

##### `sampling_config`<sup>Optional</sup> <a name="sampling_config" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule.property.samplingConfig"></a>

```python
sampling_config: IResolvable | typing.List[BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig">BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig</a>]

sampling_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_online_evaluation_config#sampling_config BedrockagentcoreOnlineEvaluationConfig#sampling_config}

---

##### `session_config`<sup>Optional</sup> <a name="session_config" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule.property.sessionConfig"></a>

```python
session_config: IResolvable | typing.List[BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig">BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig</a>]

session_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_online_evaluation_config#session_config BedrockagentcoreOnlineEvaluationConfig#session_config}

---

### BedrockagentcoreOnlineEvaluationConfigRuleFilter <a name="BedrockagentcoreOnlineEvaluationConfigRuleFilter" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilter.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_online_evaluation_config

bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilter(
  key: str,
  operator: str,
  value: IResolvable | typing.List[BedrockagentcoreOnlineEvaluationConfigRuleFilterValue] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilter.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_online_evaluation_config#key BedrockagentcoreOnlineEvaluationConfig#key}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilter.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_online_evaluation_config#operator BedrockagentcoreOnlineEvaluationConfig#operator}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilter.property.value">value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValue">BedrockagentcoreOnlineEvaluationConfigRuleFilterValue</a>]</code> | value block. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilter.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_online_evaluation_config#key BedrockagentcoreOnlineEvaluationConfig#key}.

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilter.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_online_evaluation_config#operator BedrockagentcoreOnlineEvaluationConfig#operator}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilter.property.value"></a>

```python
value: IResolvable | typing.List[BedrockagentcoreOnlineEvaluationConfigRuleFilterValue]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValue">BedrockagentcoreOnlineEvaluationConfigRuleFilterValue</a>]

value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_online_evaluation_config#value BedrockagentcoreOnlineEvaluationConfig#value}

---

### BedrockagentcoreOnlineEvaluationConfigRuleFilterValue <a name="BedrockagentcoreOnlineEvaluationConfigRuleFilterValue" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValue.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_online_evaluation_config

bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValue(
  boolean_value: bool | IResolvable = None,
  double_value: typing.Union[int, float] = None,
  string_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValue.property.booleanValue">boolean_value</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_online_evaluation_config#boolean_value BedrockagentcoreOnlineEvaluationConfig#boolean_value}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValue.property.doubleValue">double_value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_online_evaluation_config#double_value BedrockagentcoreOnlineEvaluationConfig#double_value}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValue.property.stringValue">string_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_online_evaluation_config#string_value BedrockagentcoreOnlineEvaluationConfig#string_value}. |

---

##### `boolean_value`<sup>Optional</sup> <a name="boolean_value" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValue.property.booleanValue"></a>

```python
boolean_value: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_online_evaluation_config#boolean_value BedrockagentcoreOnlineEvaluationConfig#boolean_value}.

---

##### `double_value`<sup>Optional</sup> <a name="double_value" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValue.property.doubleValue"></a>

```python
double_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_online_evaluation_config#double_value BedrockagentcoreOnlineEvaluationConfig#double_value}.

---

##### `string_value`<sup>Optional</sup> <a name="string_value" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValue.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_online_evaluation_config#string_value BedrockagentcoreOnlineEvaluationConfig#string_value}.

---

### BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig <a name="BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_online_evaluation_config

bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig(
  sampling_percentage: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig.property.samplingPercentage">sampling_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_online_evaluation_config#sampling_percentage BedrockagentcoreOnlineEvaluationConfig#sampling_percentage}. |

---

##### `sampling_percentage`<sup>Required</sup> <a name="sampling_percentage" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig.property.samplingPercentage"></a>

```python
sampling_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_online_evaluation_config#sampling_percentage BedrockagentcoreOnlineEvaluationConfig#sampling_percentage}.

---

### BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig <a name="BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_online_evaluation_config

bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig(
  session_timeout_minutes: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig.property.sessionTimeoutMinutes">session_timeout_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_online_evaluation_config#session_timeout_minutes BedrockagentcoreOnlineEvaluationConfig#session_timeout_minutes}. |

---

##### `session_timeout_minutes`<sup>Required</sup> <a name="session_timeout_minutes" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig.property.sessionTimeoutMinutes"></a>

```python
session_timeout_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_online_evaluation_config#session_timeout_minutes BedrockagentcoreOnlineEvaluationConfig#session_timeout_minutes}.

---

### BedrockagentcoreOnlineEvaluationConfigTimeouts <a name="BedrockagentcoreOnlineEvaluationConfigTimeouts" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeouts.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_online_evaluation_config

bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_online_evaluation_config#create BedrockagentcoreOnlineEvaluationConfig#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_online_evaluation_config#delete BedrockagentcoreOnlineEvaluationConfig#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_online_evaluation_config#update BedrockagentcoreOnlineEvaluationConfig#update}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList <a name="BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_online_evaluation_config

bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs">BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs">BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs</a>]

---


### BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference <a name="BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_online_evaluation_config

bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.logGroupNamesInput">log_group_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.serviceNamesInput">service_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.logGroupNames">log_group_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.serviceNames">service_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs">BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_group_names_input`<sup>Optional</sup> <a name="log_group_names_input" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.logGroupNamesInput"></a>

```python
log_group_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_names_input`<sup>Optional</sup> <a name="service_names_input" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.serviceNamesInput"></a>

```python
service_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `log_group_names`<sup>Required</sup> <a name="log_group_names" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.logGroupNames"></a>

```python
log_group_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_names`<sup>Required</sup> <a name="service_names" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.serviceNames"></a>

```python
service_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs">BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs</a>

---


### BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList <a name="BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_online_evaluation_config

bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfig">BedrockagentcoreOnlineEvaluationConfigDataSourceConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockagentcoreOnlineEvaluationConfigDataSourceConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfig">BedrockagentcoreOnlineEvaluationConfigDataSourceConfig</a>]

---


### BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference <a name="BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_online_evaluation_config

bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.putCloudwatchLogs">put_cloudwatch_logs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.resetCloudwatchLogs">reset_cloudwatch_logs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cloudwatch_logs` <a name="put_cloudwatch_logs" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.putCloudwatchLogs"></a>

```python
def put_cloudwatch_logs(
  value: IResolvable | typing.List[BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.putCloudwatchLogs.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs">BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs</a>]

---

##### `reset_cloudwatch_logs` <a name="reset_cloudwatch_logs" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.resetCloudwatchLogs"></a>

```python
def reset_cloudwatch_logs() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.cloudwatchLogs">cloudwatch_logs</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList">BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.cloudwatchLogsInput">cloudwatch_logs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs">BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfig">BedrockagentcoreOnlineEvaluationConfigDataSourceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch_logs`<sup>Required</sup> <a name="cloudwatch_logs" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.cloudwatchLogs"></a>

```python
cloudwatch_logs: BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList">BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList</a>

---

##### `cloudwatch_logs_input`<sup>Optional</sup> <a name="cloudwatch_logs_input" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.cloudwatchLogsInput"></a>

```python
cloudwatch_logs_input: IResolvable | typing.List[BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs">BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreOnlineEvaluationConfigDataSourceConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfig">BedrockagentcoreOnlineEvaluationConfigDataSourceConfig</a>

---


### BedrockagentcoreOnlineEvaluationConfigEvaluatorList <a name="BedrockagentcoreOnlineEvaluationConfigEvaluatorList" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_online_evaluation_config

bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluator">BedrockagentcoreOnlineEvaluationConfigEvaluator</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockagentcoreOnlineEvaluationConfigEvaluator]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluator">BedrockagentcoreOnlineEvaluationConfigEvaluator</a>]

---


### BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference <a name="BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_online_evaluation_config

bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.property.evaluatorIdInput">evaluator_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.property.evaluatorId">evaluator_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluator">BedrockagentcoreOnlineEvaluationConfigEvaluator</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `evaluator_id_input`<sup>Optional</sup> <a name="evaluator_id_input" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.property.evaluatorIdInput"></a>

```python
evaluator_id_input: str
```

- *Type:* str

---

##### `evaluator_id`<sup>Required</sup> <a name="evaluator_id" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.property.evaluatorId"></a>

```python
evaluator_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreOnlineEvaluationConfigEvaluator
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluator">BedrockagentcoreOnlineEvaluationConfigEvaluator</a>

---


### BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList <a name="BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_online_evaluation_config

bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference <a name="BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_online_evaluation_config

bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.property.logGroupName">log_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig">BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_group_name`<sup>Required</sup> <a name="log_group_name" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.property.logGroupName"></a>

```python
log_group_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.property.internalValue"></a>

```python
internal_value: BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig">BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig</a>

---


### BedrockagentcoreOnlineEvaluationConfigOutputConfigList <a name="BedrockagentcoreOnlineEvaluationConfigOutputConfigList" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_online_evaluation_config

bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference <a name="BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_online_evaluation_config

bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.property.cloudwatchConfig">cloudwatch_config</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList">BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfig">BedrockagentcoreOnlineEvaluationConfigOutputConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch_config`<sup>Required</sup> <a name="cloudwatch_config" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.property.cloudwatchConfig"></a>

```python
cloudwatch_config: BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList">BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.property.internalValue"></a>

```python
internal_value: BedrockagentcoreOnlineEvaluationConfigOutputConfig
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfig">BedrockagentcoreOnlineEvaluationConfigOutputConfig</a>

---


### BedrockagentcoreOnlineEvaluationConfigRuleFilterList <a name="BedrockagentcoreOnlineEvaluationConfigRuleFilterList" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_online_evaluation_config

bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilter">BedrockagentcoreOnlineEvaluationConfigRuleFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockagentcoreOnlineEvaluationConfigRuleFilter]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilter">BedrockagentcoreOnlineEvaluationConfigRuleFilter</a>]

---


### BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference <a name="BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_online_evaluation_config

bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.putValue">put_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_value` <a name="put_value" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.putValue"></a>

```python
def put_value(
  value: IResolvable | typing.List[BedrockagentcoreOnlineEvaluationConfigRuleFilterValue]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.putValue.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValue">BedrockagentcoreOnlineEvaluationConfigRuleFilterValue</a>]

---

##### `reset_value` <a name="reset_value" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.property.value">value</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList">BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.property.valueInput">value_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValue">BedrockagentcoreOnlineEvaluationConfigRuleFilterValue</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilter">BedrockagentcoreOnlineEvaluationConfigRuleFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.property.value"></a>

```python
value: BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList">BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList</a>

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.property.valueInput"></a>

```python
value_input: IResolvable | typing.List[BedrockagentcoreOnlineEvaluationConfigRuleFilterValue]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValue">BedrockagentcoreOnlineEvaluationConfigRuleFilterValue</a>]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreOnlineEvaluationConfigRuleFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilter">BedrockagentcoreOnlineEvaluationConfigRuleFilter</a>

---


### BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList <a name="BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_online_evaluation_config

bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValue">BedrockagentcoreOnlineEvaluationConfigRuleFilterValue</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockagentcoreOnlineEvaluationConfigRuleFilterValue]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValue">BedrockagentcoreOnlineEvaluationConfigRuleFilterValue</a>]

---


### BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference <a name="BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_online_evaluation_config

bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.resetBooleanValue">reset_boolean_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.resetDoubleValue">reset_double_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.resetStringValue">reset_string_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_boolean_value` <a name="reset_boolean_value" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.resetBooleanValue"></a>

```python
def reset_boolean_value() -> None
```

##### `reset_double_value` <a name="reset_double_value" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.resetDoubleValue"></a>

```python
def reset_double_value() -> None
```

##### `reset_string_value` <a name="reset_string_value" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.resetStringValue"></a>

```python
def reset_string_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.property.booleanValueInput">boolean_value_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.property.doubleValueInput">double_value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.property.stringValueInput">string_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.property.booleanValue">boolean_value</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.property.doubleValue">double_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.property.stringValue">string_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValue">BedrockagentcoreOnlineEvaluationConfigRuleFilterValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `boolean_value_input`<sup>Optional</sup> <a name="boolean_value_input" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.property.booleanValueInput"></a>

```python
boolean_value_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `double_value_input`<sup>Optional</sup> <a name="double_value_input" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.property.doubleValueInput"></a>

```python
double_value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `string_value_input`<sup>Optional</sup> <a name="string_value_input" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.property.stringValueInput"></a>

```python
string_value_input: str
```

- *Type:* str

---

##### `boolean_value`<sup>Required</sup> <a name="boolean_value" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.property.booleanValue"></a>

```python
boolean_value: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `double_value`<sup>Required</sup> <a name="double_value" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.property.doubleValue"></a>

```python
double_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `string_value`<sup>Required</sup> <a name="string_value" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreOnlineEvaluationConfigRuleFilterValue
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValue">BedrockagentcoreOnlineEvaluationConfigRuleFilterValue</a>

---


### BedrockagentcoreOnlineEvaluationConfigRuleList <a name="BedrockagentcoreOnlineEvaluationConfigRuleList" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_online_evaluation_config

bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreOnlineEvaluationConfigRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule">BedrockagentcoreOnlineEvaluationConfigRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockagentcoreOnlineEvaluationConfigRule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule">BedrockagentcoreOnlineEvaluationConfigRule</a>]

---


### BedrockagentcoreOnlineEvaluationConfigRuleOutputReference <a name="BedrockagentcoreOnlineEvaluationConfigRuleOutputReference" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_online_evaluation_config

bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.putSamplingConfig">put_sampling_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.putSessionConfig">put_session_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.resetSamplingConfig">reset_sampling_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.resetSessionConfig">reset_session_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_filter` <a name="put_filter" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.putFilter"></a>

```python
def put_filter(
  value: IResolvable | typing.List[BedrockagentcoreOnlineEvaluationConfigRuleFilter]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.putFilter.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilter">BedrockagentcoreOnlineEvaluationConfigRuleFilter</a>]

---

##### `put_sampling_config` <a name="put_sampling_config" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.putSamplingConfig"></a>

```python
def put_sampling_config(
  value: IResolvable | typing.List[BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.putSamplingConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig">BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig</a>]

---

##### `put_session_config` <a name="put_session_config" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.putSessionConfig"></a>

```python
def put_session_config(
  value: IResolvable | typing.List[BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.putSessionConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig">BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig</a>]

---

##### `reset_filter` <a name="reset_filter" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_sampling_config` <a name="reset_sampling_config" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.resetSamplingConfig"></a>

```python
def reset_sampling_config() -> None
```

##### `reset_session_config` <a name="reset_session_config" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.resetSessionConfig"></a>

```python
def reset_session_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList">BedrockagentcoreOnlineEvaluationConfigRuleFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.samplingConfig">sampling_config</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList">BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.sessionConfig">session_config</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList">BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.filterInput">filter_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilter">BedrockagentcoreOnlineEvaluationConfigRuleFilter</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.samplingConfigInput">sampling_config_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig">BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.sessionConfigInput">session_config_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig">BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule">BedrockagentcoreOnlineEvaluationConfigRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.filter"></a>

```python
filter: BedrockagentcoreOnlineEvaluationConfigRuleFilterList
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList">BedrockagentcoreOnlineEvaluationConfigRuleFilterList</a>

---

##### `sampling_config`<sup>Required</sup> <a name="sampling_config" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.samplingConfig"></a>

```python
sampling_config: BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList">BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList</a>

---

##### `session_config`<sup>Required</sup> <a name="session_config" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.sessionConfig"></a>

```python
session_config: BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList">BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.filterInput"></a>

```python
filter_input: IResolvable | typing.List[BedrockagentcoreOnlineEvaluationConfigRuleFilter]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilter">BedrockagentcoreOnlineEvaluationConfigRuleFilter</a>]

---

##### `sampling_config_input`<sup>Optional</sup> <a name="sampling_config_input" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.samplingConfigInput"></a>

```python
sampling_config_input: IResolvable | typing.List[BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig">BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig</a>]

---

##### `session_config_input`<sup>Optional</sup> <a name="session_config_input" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.sessionConfigInput"></a>

```python
session_config_input: IResolvable | typing.List[BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig">BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreOnlineEvaluationConfigRule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule">BedrockagentcoreOnlineEvaluationConfigRule</a>

---


### BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList <a name="BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_online_evaluation_config

bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig">BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig">BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig</a>]

---


### BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference <a name="BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_online_evaluation_config

bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.samplingPercentageInput">sampling_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.samplingPercentage">sampling_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig">BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sampling_percentage_input`<sup>Optional</sup> <a name="sampling_percentage_input" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.samplingPercentageInput"></a>

```python
sampling_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sampling_percentage`<sup>Required</sup> <a name="sampling_percentage" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.samplingPercentage"></a>

```python
sampling_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig">BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig</a>

---


### BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList <a name="BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_online_evaluation_config

bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig">BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig">BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig</a>]

---


### BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference <a name="BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_online_evaluation_config

bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.sessionTimeoutMinutesInput">session_timeout_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.sessionTimeoutMinutes">session_timeout_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig">BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `session_timeout_minutes_input`<sup>Optional</sup> <a name="session_timeout_minutes_input" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.sessionTimeoutMinutesInput"></a>

```python
session_timeout_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `session_timeout_minutes`<sup>Required</sup> <a name="session_timeout_minutes" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.sessionTimeoutMinutes"></a>

```python
session_timeout_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig">BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig</a>

---


### BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference <a name="BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_online_evaluation_config

bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeouts">BedrockagentcoreOnlineEvaluationConfigTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreOnlineEvaluationConfigTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeouts">BedrockagentcoreOnlineEvaluationConfigTimeouts</a>

---



