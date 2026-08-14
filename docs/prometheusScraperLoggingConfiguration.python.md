# `prometheusScraperLoggingConfiguration` Submodule <a name="`prometheusScraperLoggingConfiguration` Submodule" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrometheusScraperLoggingConfiguration <a name="PrometheusScraperLoggingConfiguration" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_scraper_logging_configuration aws_prometheus_scraper_logging_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.Initializer"></a>

```python
from cdktn_provider_aws import prometheus_scraper_logging_configuration

prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  scraper_id: str,
  logging_destination: IResolvable | typing.List[PrometheusScraperLoggingConfigurationLoggingDestination] = None,
  region: str = None,
  scraper_components: typing.List[str] = None,
  timeouts: PrometheusScraperLoggingConfigurationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.Initializer.parameter.scraperId">scraper_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_scraper_logging_configuration#scraper_id PrometheusScraperLoggingConfiguration#scraper_id}. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.Initializer.parameter.loggingDestination">logging_destination</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestination">PrometheusScraperLoggingConfigurationLoggingDestination</a>]</code> | logging_destination block. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.Initializer.parameter.scraperComponents">scraper_components</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_scraper_logging_configuration#scraper_components PrometheusScraperLoggingConfiguration#scraper_components}. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeouts">PrometheusScraperLoggingConfigurationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `scraper_id`<sup>Required</sup> <a name="scraper_id" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.Initializer.parameter.scraperId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_scraper_logging_configuration#scraper_id PrometheusScraperLoggingConfiguration#scraper_id}.

---

##### `logging_destination`<sup>Optional</sup> <a name="logging_destination" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.Initializer.parameter.loggingDestination"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestination">PrometheusScraperLoggingConfigurationLoggingDestination</a>]

logging_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_scraper_logging_configuration#logging_destination PrometheusScraperLoggingConfiguration#logging_destination}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_scraper_logging_configuration#region PrometheusScraperLoggingConfiguration#region}

---

##### `scraper_components`<sup>Optional</sup> <a name="scraper_components" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.Initializer.parameter.scraperComponents"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_scraper_logging_configuration#scraper_components PrometheusScraperLoggingConfiguration#scraper_components}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeouts">PrometheusScraperLoggingConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_scraper_logging_configuration#timeouts PrometheusScraperLoggingConfiguration#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.putLoggingDestination">put_logging_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.resetLoggingDestination">reset_logging_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.resetScraperComponents">reset_scraper_components</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_logging_destination` <a name="put_logging_destination" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.putLoggingDestination"></a>

```python
def put_logging_destination(
  value: IResolvable | typing.List[PrometheusScraperLoggingConfigurationLoggingDestination]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.putLoggingDestination.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestination">PrometheusScraperLoggingConfigurationLoggingDestination</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_scraper_logging_configuration#create PrometheusScraperLoggingConfiguration#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_scraper_logging_configuration#delete PrometheusScraperLoggingConfiguration#delete}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_scraper_logging_configuration#update PrometheusScraperLoggingConfiguration#update}

---

##### `reset_logging_destination` <a name="reset_logging_destination" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.resetLoggingDestination"></a>

```python
def reset_logging_destination() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_scraper_components` <a name="reset_scraper_components" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.resetScraperComponents"></a>

```python
def reset_scraper_components() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a PrometheusScraperLoggingConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.isConstruct"></a>

```python
from cdktn_provider_aws import prometheus_scraper_logging_configuration

prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.isTerraformElement"></a>

```python
from cdktn_provider_aws import prometheus_scraper_logging_configuration

prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.isTerraformResource"></a>

```python
from cdktn_provider_aws import prometheus_scraper_logging_configuration

prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.generateConfigForImport"></a>

```python
from cdktn_provider_aws import prometheus_scraper_logging_configuration

prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a PrometheusScraperLoggingConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PrometheusScraperLoggingConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PrometheusScraperLoggingConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_scraper_logging_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PrometheusScraperLoggingConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.loggingDestination">logging_destination</a></code> | <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList">PrometheusScraperLoggingConfigurationLoggingDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference">PrometheusScraperLoggingConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.loggingDestinationInput">logging_destination_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestination">PrometheusScraperLoggingConfigurationLoggingDestination</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.scraperComponentsInput">scraper_components_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.scraperIdInput">scraper_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeouts">PrometheusScraperLoggingConfigurationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.scraperComponents">scraper_components</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.scraperId">scraper_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `logging_destination`<sup>Required</sup> <a name="logging_destination" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.loggingDestination"></a>

```python
logging_destination: PrometheusScraperLoggingConfigurationLoggingDestinationList
```

- *Type:* <a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList">PrometheusScraperLoggingConfigurationLoggingDestinationList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.timeouts"></a>

```python
timeouts: PrometheusScraperLoggingConfigurationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference">PrometheusScraperLoggingConfigurationTimeoutsOutputReference</a>

---

##### `logging_destination_input`<sup>Optional</sup> <a name="logging_destination_input" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.loggingDestinationInput"></a>

```python
logging_destination_input: IResolvable | typing.List[PrometheusScraperLoggingConfigurationLoggingDestination]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestination">PrometheusScraperLoggingConfigurationLoggingDestination</a>]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `scraper_components_input`<sup>Optional</sup> <a name="scraper_components_input" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.scraperComponentsInput"></a>

```python
scraper_components_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scraper_id_input`<sup>Optional</sup> <a name="scraper_id_input" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.scraperIdInput"></a>

```python
scraper_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | PrometheusScraperLoggingConfigurationTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeouts">PrometheusScraperLoggingConfigurationTimeouts</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `scraper_components`<sup>Required</sup> <a name="scraper_components" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.scraperComponents"></a>

```python
scraper_components: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scraper_id`<sup>Required</sup> <a name="scraper_id" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.scraperId"></a>

```python
scraper_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PrometheusScraperLoggingConfigurationConfig <a name="PrometheusScraperLoggingConfigurationConfig" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.Initializer"></a>

```python
from cdktn_provider_aws import prometheus_scraper_logging_configuration

prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  scraper_id: str,
  logging_destination: IResolvable | typing.List[PrometheusScraperLoggingConfigurationLoggingDestination] = None,
  region: str = None,
  scraper_components: typing.List[str] = None,
  timeouts: PrometheusScraperLoggingConfigurationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.scraperId">scraper_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_scraper_logging_configuration#scraper_id PrometheusScraperLoggingConfiguration#scraper_id}. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.loggingDestination">logging_destination</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestination">PrometheusScraperLoggingConfigurationLoggingDestination</a>]</code> | logging_destination block. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.scraperComponents">scraper_components</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_scraper_logging_configuration#scraper_components PrometheusScraperLoggingConfiguration#scraper_components}. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeouts">PrometheusScraperLoggingConfigurationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `scraper_id`<sup>Required</sup> <a name="scraper_id" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.scraperId"></a>

```python
scraper_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_scraper_logging_configuration#scraper_id PrometheusScraperLoggingConfiguration#scraper_id}.

---

##### `logging_destination`<sup>Optional</sup> <a name="logging_destination" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.loggingDestination"></a>

```python
logging_destination: IResolvable | typing.List[PrometheusScraperLoggingConfigurationLoggingDestination]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestination">PrometheusScraperLoggingConfigurationLoggingDestination</a>]

logging_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_scraper_logging_configuration#logging_destination PrometheusScraperLoggingConfiguration#logging_destination}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_scraper_logging_configuration#region PrometheusScraperLoggingConfiguration#region}

---

##### `scraper_components`<sup>Optional</sup> <a name="scraper_components" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.scraperComponents"></a>

```python
scraper_components: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_scraper_logging_configuration#scraper_components PrometheusScraperLoggingConfiguration#scraper_components}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.timeouts"></a>

```python
timeouts: PrometheusScraperLoggingConfigurationTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeouts">PrometheusScraperLoggingConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_scraper_logging_configuration#timeouts PrometheusScraperLoggingConfiguration#timeouts}

---

### PrometheusScraperLoggingConfigurationLoggingDestination <a name="PrometheusScraperLoggingConfigurationLoggingDestination" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestination.Initializer"></a>

```python
from cdktn_provider_aws import prometheus_scraper_logging_configuration

prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestination(
  cloudwatch_logs: IResolvable | typing.List[PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestination.property.cloudwatchLogs">cloudwatch_logs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs">PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs</a>]</code> | cloudwatch_logs block. |

---

##### `cloudwatch_logs`<sup>Optional</sup> <a name="cloudwatch_logs" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestination.property.cloudwatchLogs"></a>

```python
cloudwatch_logs: IResolvable | typing.List[PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs">PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs</a>]

cloudwatch_logs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_scraper_logging_configuration#cloudwatch_logs PrometheusScraperLoggingConfiguration#cloudwatch_logs}

---

### PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs <a name="PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs.Initializer"></a>

```python
from cdktn_provider_aws import prometheus_scraper_logging_configuration

prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs(
  log_group_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs.property.logGroupArn">log_group_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_scraper_logging_configuration#log_group_arn PrometheusScraperLoggingConfiguration#log_group_arn}. |

---

##### `log_group_arn`<sup>Required</sup> <a name="log_group_arn" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs.property.logGroupArn"></a>

```python
log_group_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_scraper_logging_configuration#log_group_arn PrometheusScraperLoggingConfiguration#log_group_arn}.

---

### PrometheusScraperLoggingConfigurationTimeouts <a name="PrometheusScraperLoggingConfigurationTimeouts" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeouts.Initializer"></a>

```python
from cdktn_provider_aws import prometheus_scraper_logging_configuration

prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_scraper_logging_configuration#create PrometheusScraperLoggingConfiguration#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_scraper_logging_configuration#delete PrometheusScraperLoggingConfiguration#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_scraper_logging_configuration#update PrometheusScraperLoggingConfiguration#update}

---

## Classes <a name="Classes" id="Classes"></a>

### PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList <a name="PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.Initializer"></a>

```python
from cdktn_provider_aws import prometheus_scraper_logging_configuration

prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs">PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs">PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs</a>]

---


### PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference <a name="PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import prometheus_scraper_logging_configuration

prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.logGroupArnInput">log_group_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.logGroupArn">log_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs">PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_group_arn_input`<sup>Optional</sup> <a name="log_group_arn_input" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.logGroupArnInput"></a>

```python
log_group_arn_input: str
```

- *Type:* str

---

##### `log_group_arn`<sup>Required</sup> <a name="log_group_arn" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.logGroupArn"></a>

```python
log_group_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs">PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs</a>

---


### PrometheusScraperLoggingConfigurationLoggingDestinationList <a name="PrometheusScraperLoggingConfigurationLoggingDestinationList" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.Initializer"></a>

```python
from cdktn_provider_aws import prometheus_scraper_logging_configuration

prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestination">PrometheusScraperLoggingConfigurationLoggingDestination</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[PrometheusScraperLoggingConfigurationLoggingDestination]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestination">PrometheusScraperLoggingConfigurationLoggingDestination</a>]

---


### PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference <a name="PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import prometheus_scraper_logging_configuration

prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.putCloudwatchLogs">put_cloudwatch_logs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.resetCloudwatchLogs">reset_cloudwatch_logs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cloudwatch_logs` <a name="put_cloudwatch_logs" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.putCloudwatchLogs"></a>

```python
def put_cloudwatch_logs(
  value: IResolvable | typing.List[PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.putCloudwatchLogs.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs">PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs</a>]

---

##### `reset_cloudwatch_logs` <a name="reset_cloudwatch_logs" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.resetCloudwatchLogs"></a>

```python
def reset_cloudwatch_logs() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.property.cloudwatchLogs">cloudwatch_logs</a></code> | <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList">PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.property.cloudwatchLogsInput">cloudwatch_logs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs">PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestination">PrometheusScraperLoggingConfigurationLoggingDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch_logs`<sup>Required</sup> <a name="cloudwatch_logs" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.property.cloudwatchLogs"></a>

```python
cloudwatch_logs: PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList
```

- *Type:* <a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList">PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList</a>

---

##### `cloudwatch_logs_input`<sup>Optional</sup> <a name="cloudwatch_logs_input" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.property.cloudwatchLogsInput"></a>

```python
cloudwatch_logs_input: IResolvable | typing.List[PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs">PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PrometheusScraperLoggingConfigurationLoggingDestination
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestination">PrometheusScraperLoggingConfigurationLoggingDestination</a>

---


### PrometheusScraperLoggingConfigurationTimeoutsOutputReference <a name="PrometheusScraperLoggingConfigurationTimeoutsOutputReference" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import prometheus_scraper_logging_configuration

prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeouts">PrometheusScraperLoggingConfigurationTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PrometheusScraperLoggingConfigurationTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeouts">PrometheusScraperLoggingConfigurationTimeouts</a>

---



