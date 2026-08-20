# `bedrockagentcoreOnlineEvaluationConfig` Submodule <a name="`bedrockagentcoreOnlineEvaluationConfig` Submodule" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcoreOnlineEvaluationConfig <a name="BedrockagentcoreOnlineEvaluationConfig" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_online_evaluation_config aws_bedrockagentcore_online_evaluation_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/bedrockagentcoreonlineevaluationconfig"

bedrockagentcoreonlineevaluationconfig.NewBedrockagentcoreOnlineEvaluationConfig(scope Construct, id *string, config BedrockagentcoreOnlineEvaluationConfigConfig) BedrockagentcoreOnlineEvaluationConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig">BedrockagentcoreOnlineEvaluationConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig">BedrockagentcoreOnlineEvaluationConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putDataSourceConfig">PutDataSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putEvaluator">PutEvaluator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putRule">PutRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetDataSourceConfig">ResetDataSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetEvaluator">ResetEvaluator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetExecutionStatus">ResetExecutionStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetRule">ResetRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDataSourceConfig` <a name="PutDataSourceConfig" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putDataSourceConfig"></a>

```go
func PutDataSourceConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putDataSourceConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `PutEvaluator` <a name="PutEvaluator" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putEvaluator"></a>

```go
func PutEvaluator(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putEvaluator.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRule` <a name="PutRule" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putRule"></a>

```go
func PutRule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putRule.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putTimeouts"></a>

```go
func PutTimeouts(value BedrockagentcoreOnlineEvaluationConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeouts">BedrockagentcoreOnlineEvaluationConfigTimeouts</a>

---

##### `ResetDataSourceConfig` <a name="ResetDataSourceConfig" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetDataSourceConfig"></a>

```go
func ResetDataSourceConfig()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEvaluator` <a name="ResetEvaluator" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetEvaluator"></a>

```go
func ResetEvaluator()
```

##### `ResetExecutionStatus` <a name="ResetExecutionStatus" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetExecutionStatus"></a>

```go
func ResetExecutionStatus()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetRule` <a name="ResetRule" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetRule"></a>

```go
func ResetRule()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockagentcoreOnlineEvaluationConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/bedrockagentcoreonlineevaluationconfig"

bedrockagentcoreonlineevaluationconfig.BedrockagentcoreOnlineEvaluationConfig_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/bedrockagentcoreonlineevaluationconfig"

bedrockagentcoreonlineevaluationconfig.BedrockagentcoreOnlineEvaluationConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/bedrockagentcoreonlineevaluationconfig"

bedrockagentcoreonlineevaluationconfig.BedrockagentcoreOnlineEvaluationConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/bedrockagentcoreonlineevaluationconfig"

bedrockagentcoreonlineevaluationconfig.BedrockagentcoreOnlineEvaluationConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a BedrockagentcoreOnlineEvaluationConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BedrockagentcoreOnlineEvaluationConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BedrockagentcoreOnlineEvaluationConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_online_evaluation_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the BedrockagentcoreOnlineEvaluationConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.dataSourceConfig">DataSourceConfig</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList">BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.evaluator">Evaluator</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList">BedrockagentcoreOnlineEvaluationConfigEvaluatorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.onlineEvaluationConfigArn">OnlineEvaluationConfigArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.onlineEvaluationConfigId">OnlineEvaluationConfigId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.outputConfig">OutputConfig</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList">BedrockagentcoreOnlineEvaluationConfigOutputConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.rule">Rule</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList">BedrockagentcoreOnlineEvaluationConfigRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.tagsAll">TagsAll</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference">BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.dataSourceConfigInput">DataSourceConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.enableOnCreateInput">EnableOnCreateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.evaluationExecutionRoleArnInput">EvaluationExecutionRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.evaluatorInput">EvaluatorInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.executionStatusInput">ExecutionStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.onlineEvaluationConfigNameInput">OnlineEvaluationConfigNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.ruleInput">RuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.enableOnCreate">EnableOnCreate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.evaluationExecutionRoleArn">EvaluationExecutionRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.executionStatus">ExecutionStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.onlineEvaluationConfigName">OnlineEvaluationConfigName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataSourceConfig`<sup>Required</sup> <a name="DataSourceConfig" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.dataSourceConfig"></a>

```go
func DataSourceConfig() BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList">BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList</a>

---

##### `Evaluator`<sup>Required</sup> <a name="Evaluator" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.evaluator"></a>

```go
func Evaluator() BedrockagentcoreOnlineEvaluationConfigEvaluatorList
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList">BedrockagentcoreOnlineEvaluationConfigEvaluatorList</a>

---

##### `OnlineEvaluationConfigArn`<sup>Required</sup> <a name="OnlineEvaluationConfigArn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.onlineEvaluationConfigArn"></a>

```go
func OnlineEvaluationConfigArn() *string
```

- *Type:* *string

---

##### `OnlineEvaluationConfigId`<sup>Required</sup> <a name="OnlineEvaluationConfigId" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.onlineEvaluationConfigId"></a>

```go
func OnlineEvaluationConfigId() *string
```

- *Type:* *string

---

##### `OutputConfig`<sup>Required</sup> <a name="OutputConfig" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.outputConfig"></a>

```go
func OutputConfig() BedrockagentcoreOnlineEvaluationConfigOutputConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList">BedrockagentcoreOnlineEvaluationConfigOutputConfigList</a>

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.rule"></a>

```go
func Rule() BedrockagentcoreOnlineEvaluationConfigRuleList
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList">BedrockagentcoreOnlineEvaluationConfigRuleList</a>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.tagsAll"></a>

```go
func TagsAll() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.timeouts"></a>

```go
func Timeouts() BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference">BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference</a>

---

##### `DataSourceConfigInput`<sup>Optional</sup> <a name="DataSourceConfigInput" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.dataSourceConfigInput"></a>

```go
func DataSourceConfigInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EnableOnCreateInput`<sup>Optional</sup> <a name="EnableOnCreateInput" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.enableOnCreateInput"></a>

```go
func EnableOnCreateInput() interface{}
```

- *Type:* interface{}

---

##### `EvaluationExecutionRoleArnInput`<sup>Optional</sup> <a name="EvaluationExecutionRoleArnInput" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.evaluationExecutionRoleArnInput"></a>

```go
func EvaluationExecutionRoleArnInput() *string
```

- *Type:* *string

---

##### `EvaluatorInput`<sup>Optional</sup> <a name="EvaluatorInput" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.evaluatorInput"></a>

```go
func EvaluatorInput() interface{}
```

- *Type:* interface{}

---

##### `ExecutionStatusInput`<sup>Optional</sup> <a name="ExecutionStatusInput" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.executionStatusInput"></a>

```go
func ExecutionStatusInput() *string
```

- *Type:* *string

---

##### `OnlineEvaluationConfigNameInput`<sup>Optional</sup> <a name="OnlineEvaluationConfigNameInput" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.onlineEvaluationConfigNameInput"></a>

```go
func OnlineEvaluationConfigNameInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.ruleInput"></a>

```go
func RuleInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EnableOnCreate`<sup>Required</sup> <a name="EnableOnCreate" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.enableOnCreate"></a>

```go
func EnableOnCreate() interface{}
```

- *Type:* interface{}

---

##### `EvaluationExecutionRoleArn`<sup>Required</sup> <a name="EvaluationExecutionRoleArn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.evaluationExecutionRoleArn"></a>

```go
func EvaluationExecutionRoleArn() *string
```

- *Type:* *string

---

##### `ExecutionStatus`<sup>Required</sup> <a name="ExecutionStatus" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.executionStatus"></a>

```go
func ExecutionStatus() *string
```

- *Type:* *string

---

##### `OnlineEvaluationConfigName`<sup>Required</sup> <a name="OnlineEvaluationConfigName" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.onlineEvaluationConfigName"></a>

```go
func OnlineEvaluationConfigName() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcoreOnlineEvaluationConfigConfig <a name="BedrockagentcoreOnlineEvaluationConfigConfig" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/bedrockagentcoreonlineevaluationconfig"

&bedrockagentcoreonlineevaluationconfig.BedrockagentcoreOnlineEvaluationConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	EnableOnCreate: interface{},
	EvaluationExecutionRoleArn: *string,
	OnlineEvaluationConfigName: *string,
	DataSourceConfig: interface{},
	Description: *string,
	Evaluator: interface{},
	ExecutionStatus: *string,
	Region: *string,
	Rule: interface{},
	Tags: *map[string]*string,
	Timeouts: github.com/cdktn-io/cdktn-provider-aws-go/aws/v25.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.enableOnCreate">EnableOnCreate</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_online_evaluation_config#enable_on_create BedrockagentcoreOnlineEvaluationConfig#enable_on_create}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.evaluationExecutionRoleArn">EvaluationExecutionRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_online_evaluation_config#evaluation_execution_role_arn BedrockagentcoreOnlineEvaluationConfig#evaluation_execution_role_arn}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.onlineEvaluationConfigName">OnlineEvaluationConfigName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_online_evaluation_config#online_evaluation_config_name BedrockagentcoreOnlineEvaluationConfig#online_evaluation_config_name}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.dataSourceConfig">DataSourceConfig</a></code> | <code>interface{}</code> | data_source_config block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_online_evaluation_config#description BedrockagentcoreOnlineEvaluationConfig#description}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.evaluator">Evaluator</a></code> | <code>interface{}</code> | evaluator block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.executionStatus">ExecutionStatus</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_online_evaluation_config#execution_status BedrockagentcoreOnlineEvaluationConfig#execution_status}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.rule">Rule</a></code> | <code>interface{}</code> | rule block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_online_evaluation_config#tags BedrockagentcoreOnlineEvaluationConfig#tags}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeouts">BedrockagentcoreOnlineEvaluationConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EnableOnCreate`<sup>Required</sup> <a name="EnableOnCreate" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.enableOnCreate"></a>

```go
EnableOnCreate interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_online_evaluation_config#enable_on_create BedrockagentcoreOnlineEvaluationConfig#enable_on_create}.

---

##### `EvaluationExecutionRoleArn`<sup>Required</sup> <a name="EvaluationExecutionRoleArn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.evaluationExecutionRoleArn"></a>

```go
EvaluationExecutionRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_online_evaluation_config#evaluation_execution_role_arn BedrockagentcoreOnlineEvaluationConfig#evaluation_execution_role_arn}.

---

##### `OnlineEvaluationConfigName`<sup>Required</sup> <a name="OnlineEvaluationConfigName" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.onlineEvaluationConfigName"></a>

```go
OnlineEvaluationConfigName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_online_evaluation_config#online_evaluation_config_name BedrockagentcoreOnlineEvaluationConfig#online_evaluation_config_name}.

---

##### `DataSourceConfig`<sup>Optional</sup> <a name="DataSourceConfig" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.dataSourceConfig"></a>

```go
DataSourceConfig interface{}
```

- *Type:* interface{}

data_source_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_online_evaluation_config#data_source_config BedrockagentcoreOnlineEvaluationConfig#data_source_config}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_online_evaluation_config#description BedrockagentcoreOnlineEvaluationConfig#description}.

---

##### `Evaluator`<sup>Optional</sup> <a name="Evaluator" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.evaluator"></a>

```go
Evaluator interface{}
```

- *Type:* interface{}

evaluator block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_online_evaluation_config#evaluator BedrockagentcoreOnlineEvaluationConfig#evaluator}

---

##### `ExecutionStatus`<sup>Optional</sup> <a name="ExecutionStatus" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.executionStatus"></a>

```go
ExecutionStatus *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_online_evaluation_config#execution_status BedrockagentcoreOnlineEvaluationConfig#execution_status}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_online_evaluation_config#region BedrockagentcoreOnlineEvaluationConfig#region}

---

##### `Rule`<sup>Optional</sup> <a name="Rule" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.rule"></a>

```go
Rule interface{}
```

- *Type:* interface{}

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_online_evaluation_config#rule BedrockagentcoreOnlineEvaluationConfig#rule}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_online_evaluation_config#tags BedrockagentcoreOnlineEvaluationConfig#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.timeouts"></a>

```go
Timeouts BedrockagentcoreOnlineEvaluationConfigTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeouts">BedrockagentcoreOnlineEvaluationConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_online_evaluation_config#timeouts BedrockagentcoreOnlineEvaluationConfig#timeouts}

---

### BedrockagentcoreOnlineEvaluationConfigDataSourceConfig <a name="BedrockagentcoreOnlineEvaluationConfigDataSourceConfig" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/bedrockagentcoreonlineevaluationconfig"

&bedrockagentcoreonlineevaluationconfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfig {
	CloudwatchLogs: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfig.property.cloudwatchLogs">CloudwatchLogs</a></code> | <code>interface{}</code> | cloudwatch_logs block. |

---

##### `CloudwatchLogs`<sup>Optional</sup> <a name="CloudwatchLogs" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfig.property.cloudwatchLogs"></a>

```go
CloudwatchLogs interface{}
```

- *Type:* interface{}

cloudwatch_logs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_online_evaluation_config#cloudwatch_logs BedrockagentcoreOnlineEvaluationConfig#cloudwatch_logs}

---

### BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs <a name="BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/bedrockagentcoreonlineevaluationconfig"

&bedrockagentcoreonlineevaluationconfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs {
	LogGroupNames: *[]*string,
	ServiceNames: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs.property.logGroupNames">LogGroupNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_online_evaluation_config#log_group_names BedrockagentcoreOnlineEvaluationConfig#log_group_names}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs.property.serviceNames">ServiceNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_online_evaluation_config#service_names BedrockagentcoreOnlineEvaluationConfig#service_names}. |

---

##### `LogGroupNames`<sup>Required</sup> <a name="LogGroupNames" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs.property.logGroupNames"></a>

```go
LogGroupNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_online_evaluation_config#log_group_names BedrockagentcoreOnlineEvaluationConfig#log_group_names}.

---

##### `ServiceNames`<sup>Required</sup> <a name="ServiceNames" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs.property.serviceNames"></a>

```go
ServiceNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_online_evaluation_config#service_names BedrockagentcoreOnlineEvaluationConfig#service_names}.

---

### BedrockagentcoreOnlineEvaluationConfigEvaluator <a name="BedrockagentcoreOnlineEvaluationConfigEvaluator" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluator"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluator.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/bedrockagentcoreonlineevaluationconfig"

&bedrockagentcoreonlineevaluationconfig.BedrockagentcoreOnlineEvaluationConfigEvaluator {
	EvaluatorId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluator.property.evaluatorId">EvaluatorId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_online_evaluation_config#evaluator_id BedrockagentcoreOnlineEvaluationConfig#evaluator_id}. |

---

##### `EvaluatorId`<sup>Required</sup> <a name="EvaluatorId" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluator.property.evaluatorId"></a>

```go
EvaluatorId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_online_evaluation_config#evaluator_id BedrockagentcoreOnlineEvaluationConfig#evaluator_id}.

---

### BedrockagentcoreOnlineEvaluationConfigOutputConfig <a name="BedrockagentcoreOnlineEvaluationConfigOutputConfig" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/bedrockagentcoreonlineevaluationconfig"

&bedrockagentcoreonlineevaluationconfig.BedrockagentcoreOnlineEvaluationConfigOutputConfig {

}
```


### BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig <a name="BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/bedrockagentcoreonlineevaluationconfig"

&bedrockagentcoreonlineevaluationconfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig {

}
```


### BedrockagentcoreOnlineEvaluationConfigRule <a name="BedrockagentcoreOnlineEvaluationConfigRule" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/bedrockagentcoreonlineevaluationconfig"

&bedrockagentcoreonlineevaluationconfig.BedrockagentcoreOnlineEvaluationConfigRule {
	Filter: interface{},
	SamplingConfig: interface{},
	SessionConfig: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule.property.samplingConfig">SamplingConfig</a></code> | <code>interface{}</code> | sampling_config block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule.property.sessionConfig">SessionConfig</a></code> | <code>interface{}</code> | session_config block. |

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_online_evaluation_config#filter BedrockagentcoreOnlineEvaluationConfig#filter}

---

##### `SamplingConfig`<sup>Optional</sup> <a name="SamplingConfig" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule.property.samplingConfig"></a>

```go
SamplingConfig interface{}
```

- *Type:* interface{}

sampling_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_online_evaluation_config#sampling_config BedrockagentcoreOnlineEvaluationConfig#sampling_config}

---

##### `SessionConfig`<sup>Optional</sup> <a name="SessionConfig" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule.property.sessionConfig"></a>

```go
SessionConfig interface{}
```

- *Type:* interface{}

session_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_online_evaluation_config#session_config BedrockagentcoreOnlineEvaluationConfig#session_config}

---

### BedrockagentcoreOnlineEvaluationConfigRuleFilter <a name="BedrockagentcoreOnlineEvaluationConfigRuleFilter" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/bedrockagentcoreonlineevaluationconfig"

&bedrockagentcoreonlineevaluationconfig.BedrockagentcoreOnlineEvaluationConfigRuleFilter {
	Key: *string,
	Operator: *string,
	Value: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilter.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_online_evaluation_config#key BedrockagentcoreOnlineEvaluationConfig#key}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilter.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_online_evaluation_config#operator BedrockagentcoreOnlineEvaluationConfig#operator}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilter.property.value">Value</a></code> | <code>interface{}</code> | value block. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilter.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_online_evaluation_config#key BedrockagentcoreOnlineEvaluationConfig#key}.

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilter.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_online_evaluation_config#operator BedrockagentcoreOnlineEvaluationConfig#operator}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilter.property.value"></a>

```go
Value interface{}
```

- *Type:* interface{}

value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_online_evaluation_config#value BedrockagentcoreOnlineEvaluationConfig#value}

---

### BedrockagentcoreOnlineEvaluationConfigRuleFilterValue <a name="BedrockagentcoreOnlineEvaluationConfigRuleFilterValue" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/bedrockagentcoreonlineevaluationconfig"

&bedrockagentcoreonlineevaluationconfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValue {
	BooleanValue: interface{},
	DoubleValue: *f64,
	StringValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValue.property.booleanValue">BooleanValue</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_online_evaluation_config#boolean_value BedrockagentcoreOnlineEvaluationConfig#boolean_value}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValue.property.doubleValue">DoubleValue</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_online_evaluation_config#double_value BedrockagentcoreOnlineEvaluationConfig#double_value}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValue.property.stringValue">StringValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_online_evaluation_config#string_value BedrockagentcoreOnlineEvaluationConfig#string_value}. |

---

##### `BooleanValue`<sup>Optional</sup> <a name="BooleanValue" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValue.property.booleanValue"></a>

```go
BooleanValue interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_online_evaluation_config#boolean_value BedrockagentcoreOnlineEvaluationConfig#boolean_value}.

---

##### `DoubleValue`<sup>Optional</sup> <a name="DoubleValue" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValue.property.doubleValue"></a>

```go
DoubleValue *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_online_evaluation_config#double_value BedrockagentcoreOnlineEvaluationConfig#double_value}.

---

##### `StringValue`<sup>Optional</sup> <a name="StringValue" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValue.property.stringValue"></a>

```go
StringValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_online_evaluation_config#string_value BedrockagentcoreOnlineEvaluationConfig#string_value}.

---

### BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig <a name="BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/bedrockagentcoreonlineevaluationconfig"

&bedrockagentcoreonlineevaluationconfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig {
	SamplingPercentage: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig.property.samplingPercentage">SamplingPercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_online_evaluation_config#sampling_percentage BedrockagentcoreOnlineEvaluationConfig#sampling_percentage}. |

---

##### `SamplingPercentage`<sup>Required</sup> <a name="SamplingPercentage" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig.property.samplingPercentage"></a>

```go
SamplingPercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_online_evaluation_config#sampling_percentage BedrockagentcoreOnlineEvaluationConfig#sampling_percentage}.

---

### BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig <a name="BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/bedrockagentcoreonlineevaluationconfig"

&bedrockagentcoreonlineevaluationconfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig {
	SessionTimeoutMinutes: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig.property.sessionTimeoutMinutes">SessionTimeoutMinutes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_online_evaluation_config#session_timeout_minutes BedrockagentcoreOnlineEvaluationConfig#session_timeout_minutes}. |

---

##### `SessionTimeoutMinutes`<sup>Required</sup> <a name="SessionTimeoutMinutes" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig.property.sessionTimeoutMinutes"></a>

```go
SessionTimeoutMinutes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_online_evaluation_config#session_timeout_minutes BedrockagentcoreOnlineEvaluationConfig#session_timeout_minutes}.

---

### BedrockagentcoreOnlineEvaluationConfigTimeouts <a name="BedrockagentcoreOnlineEvaluationConfigTimeouts" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/bedrockagentcoreonlineevaluationconfig"

&bedrockagentcoreonlineevaluationconfig.BedrockagentcoreOnlineEvaluationConfigTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeouts.property.delete">Delete</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeouts.property.update">Update</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_online_evaluation_config#create BedrockagentcoreOnlineEvaluationConfig#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_online_evaluation_config#delete BedrockagentcoreOnlineEvaluationConfig#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_online_evaluation_config#update BedrockagentcoreOnlineEvaluationConfig#update}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList <a name="BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/bedrockagentcoreonlineevaluationconfig"

bedrockagentcoreonlineevaluationconfig.NewBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.get"></a>

```go
func Get(index *f64) BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference <a name="BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/bedrockagentcoreonlineevaluationconfig"

bedrockagentcoreonlineevaluationconfig.NewBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.logGroupNamesInput">LogGroupNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.serviceNamesInput">ServiceNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.logGroupNames">LogGroupNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.serviceNames">ServiceNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogGroupNamesInput`<sup>Optional</sup> <a name="LogGroupNamesInput" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.logGroupNamesInput"></a>

```go
func LogGroupNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ServiceNamesInput`<sup>Optional</sup> <a name="ServiceNamesInput" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.serviceNamesInput"></a>

```go
func ServiceNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `LogGroupNames`<sup>Required</sup> <a name="LogGroupNames" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.logGroupNames"></a>

```go
func LogGroupNames() *[]*string
```

- *Type:* *[]*string

---

##### `ServiceNames`<sup>Required</sup> <a name="ServiceNames" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.serviceNames"></a>

```go
func ServiceNames() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList <a name="BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/bedrockagentcoreonlineevaluationconfig"

bedrockagentcoreonlineevaluationconfig.NewBedrockagentcoreOnlineEvaluationConfigDataSourceConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.get"></a>

```go
func Get(index *f64) BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference <a name="BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/bedrockagentcoreonlineevaluationconfig"

bedrockagentcoreonlineevaluationconfig.NewBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.putCloudwatchLogs">PutCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.resetCloudwatchLogs">ResetCloudwatchLogs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudwatchLogs` <a name="PutCloudwatchLogs" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.putCloudwatchLogs"></a>

```go
func PutCloudwatchLogs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.putCloudwatchLogs.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCloudwatchLogs` <a name="ResetCloudwatchLogs" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.resetCloudwatchLogs"></a>

```go
func ResetCloudwatchLogs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.cloudwatchLogs">CloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList">BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.cloudwatchLogsInput">CloudwatchLogsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudwatchLogs`<sup>Required</sup> <a name="CloudwatchLogs" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.cloudwatchLogs"></a>

```go
func CloudwatchLogs() BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList">BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList</a>

---

##### `CloudwatchLogsInput`<sup>Optional</sup> <a name="CloudwatchLogsInput" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.cloudwatchLogsInput"></a>

```go
func CloudwatchLogsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreOnlineEvaluationConfigEvaluatorList <a name="BedrockagentcoreOnlineEvaluationConfigEvaluatorList" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/bedrockagentcoreonlineevaluationconfig"

bedrockagentcoreonlineevaluationconfig.NewBedrockagentcoreOnlineEvaluationConfigEvaluatorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockagentcoreOnlineEvaluationConfigEvaluatorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.get"></a>

```go
func Get(index *f64) BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference <a name="BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/bedrockagentcoreonlineevaluationconfig"

bedrockagentcoreonlineevaluationconfig.NewBedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.property.evaluatorIdInput">EvaluatorIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.property.evaluatorId">EvaluatorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EvaluatorIdInput`<sup>Optional</sup> <a name="EvaluatorIdInput" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.property.evaluatorIdInput"></a>

```go
func EvaluatorIdInput() *string
```

- *Type:* *string

---

##### `EvaluatorId`<sup>Required</sup> <a name="EvaluatorId" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.property.evaluatorId"></a>

```go
func EvaluatorId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList <a name="BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/bedrockagentcoreonlineevaluationconfig"

bedrockagentcoreonlineevaluationconfig.NewBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList.get"></a>

```go
func Get(index *f64) BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference <a name="BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/bedrockagentcoreonlineevaluationconfig"

bedrockagentcoreonlineevaluationconfig.NewBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.property.logGroupName">LogGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig">BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogGroupName`<sup>Required</sup> <a name="LogGroupName" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.property.logGroupName"></a>

```go
func LogGroupName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig">BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig</a>

---


### BedrockagentcoreOnlineEvaluationConfigOutputConfigList <a name="BedrockagentcoreOnlineEvaluationConfigOutputConfigList" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/bedrockagentcoreonlineevaluationconfig"

bedrockagentcoreonlineevaluationconfig.NewBedrockagentcoreOnlineEvaluationConfigOutputConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockagentcoreOnlineEvaluationConfigOutputConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList.get"></a>

```go
func Get(index *f64) BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference <a name="BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/bedrockagentcoreonlineevaluationconfig"

bedrockagentcoreonlineevaluationconfig.NewBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.property.cloudwatchConfig">CloudwatchConfig</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList">BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfig">BedrockagentcoreOnlineEvaluationConfigOutputConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudwatchConfig`<sup>Required</sup> <a name="CloudwatchConfig" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.property.cloudwatchConfig"></a>

```go
func CloudwatchConfig() BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList">BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() BedrockagentcoreOnlineEvaluationConfigOutputConfig
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfig">BedrockagentcoreOnlineEvaluationConfigOutputConfig</a>

---


### BedrockagentcoreOnlineEvaluationConfigRuleFilterList <a name="BedrockagentcoreOnlineEvaluationConfigRuleFilterList" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/bedrockagentcoreonlineevaluationconfig"

bedrockagentcoreonlineevaluationconfig.NewBedrockagentcoreOnlineEvaluationConfigRuleFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockagentcoreOnlineEvaluationConfigRuleFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.get"></a>

```go
func Get(index *f64) BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference <a name="BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/bedrockagentcoreonlineevaluationconfig"

bedrockagentcoreonlineevaluationconfig.NewBedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.putValue">PutValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValue` <a name="PutValue" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.putValue"></a>

```go
func PutValue(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.putValue.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.property.value">Value</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList">BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.property.valueInput">ValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.property.value"></a>

```go
func Value() BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList">BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList</a>

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.property.valueInput"></a>

```go
func ValueInput() interface{}
```

- *Type:* interface{}

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList <a name="BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/bedrockagentcoreonlineevaluationconfig"

bedrockagentcoreonlineevaluationconfig.NewBedrockagentcoreOnlineEvaluationConfigRuleFilterValueList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.get"></a>

```go
func Get(index *f64) BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference <a name="BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/bedrockagentcoreonlineevaluationconfig"

bedrockagentcoreonlineevaluationconfig.NewBedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.resetBooleanValue">ResetBooleanValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.resetDoubleValue">ResetDoubleValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.resetStringValue">ResetStringValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBooleanValue` <a name="ResetBooleanValue" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.resetBooleanValue"></a>

```go
func ResetBooleanValue()
```

##### `ResetDoubleValue` <a name="ResetDoubleValue" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.resetDoubleValue"></a>

```go
func ResetDoubleValue()
```

##### `ResetStringValue` <a name="ResetStringValue" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.resetStringValue"></a>

```go
func ResetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.property.booleanValueInput">BooleanValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.property.doubleValueInput">DoubleValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.property.stringValueInput">StringValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.property.booleanValue">BooleanValue</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.property.doubleValue">DoubleValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.property.stringValue">StringValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BooleanValueInput`<sup>Optional</sup> <a name="BooleanValueInput" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.property.booleanValueInput"></a>

```go
func BooleanValueInput() interface{}
```

- *Type:* interface{}

---

##### `DoubleValueInput`<sup>Optional</sup> <a name="DoubleValueInput" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.property.doubleValueInput"></a>

```go
func DoubleValueInput() *f64
```

- *Type:* *f64

---

##### `StringValueInput`<sup>Optional</sup> <a name="StringValueInput" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.property.stringValueInput"></a>

```go
func StringValueInput() *string
```

- *Type:* *string

---

##### `BooleanValue`<sup>Required</sup> <a name="BooleanValue" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.property.booleanValue"></a>

```go
func BooleanValue() interface{}
```

- *Type:* interface{}

---

##### `DoubleValue`<sup>Required</sup> <a name="DoubleValue" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.property.doubleValue"></a>

```go
func DoubleValue() *f64
```

- *Type:* *f64

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.property.stringValue"></a>

```go
func StringValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreOnlineEvaluationConfigRuleList <a name="BedrockagentcoreOnlineEvaluationConfigRuleList" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/bedrockagentcoreonlineevaluationconfig"

bedrockagentcoreonlineevaluationconfig.NewBedrockagentcoreOnlineEvaluationConfigRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockagentcoreOnlineEvaluationConfigRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.get"></a>

```go
func Get(index *f64) BedrockagentcoreOnlineEvaluationConfigRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreOnlineEvaluationConfigRuleOutputReference <a name="BedrockagentcoreOnlineEvaluationConfigRuleOutputReference" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/bedrockagentcoreonlineevaluationconfig"

bedrockagentcoreonlineevaluationconfig.NewBedrockagentcoreOnlineEvaluationConfigRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockagentcoreOnlineEvaluationConfigRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.putSamplingConfig">PutSamplingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.putSessionConfig">PutSessionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.resetSamplingConfig">ResetSamplingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.resetSessionConfig">ResetSessionConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFilter` <a name="PutFilter" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSamplingConfig` <a name="PutSamplingConfig" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.putSamplingConfig"></a>

```go
func PutSamplingConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.putSamplingConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSessionConfig` <a name="PutSessionConfig" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.putSessionConfig"></a>

```go
func PutSessionConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.putSessionConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetSamplingConfig` <a name="ResetSamplingConfig" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.resetSamplingConfig"></a>

```go
func ResetSamplingConfig()
```

##### `ResetSessionConfig` <a name="ResetSessionConfig" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.resetSessionConfig"></a>

```go
func ResetSessionConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList">BedrockagentcoreOnlineEvaluationConfigRuleFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.samplingConfig">SamplingConfig</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList">BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.sessionConfig">SessionConfig</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList">BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.samplingConfigInput">SamplingConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.sessionConfigInput">SessionConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.filter"></a>

```go
func Filter() BedrockagentcoreOnlineEvaluationConfigRuleFilterList
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList">BedrockagentcoreOnlineEvaluationConfigRuleFilterList</a>

---

##### `SamplingConfig`<sup>Required</sup> <a name="SamplingConfig" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.samplingConfig"></a>

```go
func SamplingConfig() BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList">BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList</a>

---

##### `SessionConfig`<sup>Required</sup> <a name="SessionConfig" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.sessionConfig"></a>

```go
func SessionConfig() BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList">BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `SamplingConfigInput`<sup>Optional</sup> <a name="SamplingConfigInput" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.samplingConfigInput"></a>

```go
func SamplingConfigInput() interface{}
```

- *Type:* interface{}

---

##### `SessionConfigInput`<sup>Optional</sup> <a name="SessionConfigInput" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.sessionConfigInput"></a>

```go
func SessionConfigInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList <a name="BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/bedrockagentcoreonlineevaluationconfig"

bedrockagentcoreonlineevaluationconfig.NewBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.get"></a>

```go
func Get(index *f64) BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference <a name="BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/bedrockagentcoreonlineevaluationconfig"

bedrockagentcoreonlineevaluationconfig.NewBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.samplingPercentageInput">SamplingPercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.samplingPercentage">SamplingPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SamplingPercentageInput`<sup>Optional</sup> <a name="SamplingPercentageInput" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.samplingPercentageInput"></a>

```go
func SamplingPercentageInput() *f64
```

- *Type:* *f64

---

##### `SamplingPercentage`<sup>Required</sup> <a name="SamplingPercentage" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.samplingPercentage"></a>

```go
func SamplingPercentage() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList <a name="BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/bedrockagentcoreonlineevaluationconfig"

bedrockagentcoreonlineevaluationconfig.NewBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.get"></a>

```go
func Get(index *f64) BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference <a name="BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/bedrockagentcoreonlineevaluationconfig"

bedrockagentcoreonlineevaluationconfig.NewBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.sessionTimeoutMinutesInput">SessionTimeoutMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.sessionTimeoutMinutes">SessionTimeoutMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SessionTimeoutMinutesInput`<sup>Optional</sup> <a name="SessionTimeoutMinutesInput" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.sessionTimeoutMinutesInput"></a>

```go
func SessionTimeoutMinutesInput() *f64
```

- *Type:* *f64

---

##### `SessionTimeoutMinutes`<sup>Required</sup> <a name="SessionTimeoutMinutes" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.sessionTimeoutMinutes"></a>

```go
func SessionTimeoutMinutes() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference <a name="BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/bedrockagentcoreonlineevaluationconfig"

bedrockagentcoreonlineevaluationconfig.NewBedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



