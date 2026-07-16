# `bedrockagentcoreEvaluator` Submodule <a name="`bedrockagentcoreEvaluator` Submodule" id="@cdktn/provider-aws.bedrockagentcoreEvaluator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcoreEvaluator <a name="BedrockagentcoreEvaluator" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_evaluator aws_bedrockagentcore_evaluator}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/bedrockagentcoreevaluator"

bedrockagentcoreevaluator.NewBedrockagentcoreEvaluator(scope Construct, id *string, config BedrockagentcoreEvaluatorConfig) BedrockagentcoreEvaluator
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorConfig">BedrockagentcoreEvaluatorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorConfig">BedrockagentcoreEvaluatorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.putEvaluatorConfig">PutEvaluatorConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.resetEvaluatorConfig">ResetEvaluatorConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEvaluatorConfig` <a name="PutEvaluatorConfig" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.putEvaluatorConfig"></a>

```go
func PutEvaluatorConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.putEvaluatorConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.putTimeouts"></a>

```go
func PutTimeouts(value BedrockagentcoreEvaluatorTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeouts">BedrockagentcoreEvaluatorTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEvaluatorConfig` <a name="ResetEvaluatorConfig" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.resetEvaluatorConfig"></a>

```go
func ResetEvaluatorConfig()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.resetKmsKeyArn"></a>

```go
func ResetKmsKeyArn()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockagentcoreEvaluator resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/bedrockagentcoreevaluator"

bedrockagentcoreevaluator.BedrockagentcoreEvaluator_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/bedrockagentcoreevaluator"

bedrockagentcoreevaluator.BedrockagentcoreEvaluator_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/bedrockagentcoreevaluator"

bedrockagentcoreevaluator.BedrockagentcoreEvaluator_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/bedrockagentcoreevaluator"

bedrockagentcoreevaluator.BedrockagentcoreEvaluator_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a BedrockagentcoreEvaluator resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BedrockagentcoreEvaluator to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BedrockagentcoreEvaluator that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_evaluator#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the BedrockagentcoreEvaluator to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.evaluatorArn">EvaluatorArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.evaluatorConfig">EvaluatorConfig</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigList">BedrockagentcoreEvaluatorEvaluatorConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.evaluatorId">EvaluatorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.lockedForModification">LockedForModification</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.tagsAll">TagsAll</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference">BedrockagentcoreEvaluatorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.evaluatorConfigInput">EvaluatorConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.evaluatorNameInput">EvaluatorNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.levelInput">LevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.evaluatorName">EvaluatorName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.level">Level</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `EvaluatorArn`<sup>Required</sup> <a name="EvaluatorArn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.evaluatorArn"></a>

```go
func EvaluatorArn() *string
```

- *Type:* *string

---

##### `EvaluatorConfig`<sup>Required</sup> <a name="EvaluatorConfig" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.evaluatorConfig"></a>

```go
func EvaluatorConfig() BedrockagentcoreEvaluatorEvaluatorConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigList">BedrockagentcoreEvaluatorEvaluatorConfigList</a>

---

##### `EvaluatorId`<sup>Required</sup> <a name="EvaluatorId" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.evaluatorId"></a>

```go
func EvaluatorId() *string
```

- *Type:* *string

---

##### `LockedForModification`<sup>Required</sup> <a name="LockedForModification" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.lockedForModification"></a>

```go
func LockedForModification() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.tagsAll"></a>

```go
func TagsAll() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.timeouts"></a>

```go
func Timeouts() BedrockagentcoreEvaluatorTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference">BedrockagentcoreEvaluatorTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EvaluatorConfigInput`<sup>Optional</sup> <a name="EvaluatorConfigInput" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.evaluatorConfigInput"></a>

```go
func EvaluatorConfigInput() interface{}
```

- *Type:* interface{}

---

##### `EvaluatorNameInput`<sup>Optional</sup> <a name="EvaluatorNameInput" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.evaluatorNameInput"></a>

```go
func EvaluatorNameInput() *string
```

- *Type:* *string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.kmsKeyArnInput"></a>

```go
func KmsKeyArnInput() *string
```

- *Type:* *string

---

##### `LevelInput`<sup>Optional</sup> <a name="LevelInput" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.levelInput"></a>

```go
func LevelInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EvaluatorName`<sup>Required</sup> <a name="EvaluatorName" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.evaluatorName"></a>

```go
func EvaluatorName() *string
```

- *Type:* *string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.level"></a>

```go
func Level() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluator.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcoreEvaluatorConfig <a name="BedrockagentcoreEvaluatorConfig" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/bedrockagentcoreevaluator"

&bedrockagentcoreevaluator.BedrockagentcoreEvaluatorConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	EvaluatorName: *string,
	Level: *string,
	Description: *string,
	EvaluatorConfig: interface{},
	KmsKeyArn: *string,
	Region: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktn-io/cdktn-provider-aws-go/aws/v24.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorConfig.property.evaluatorName">EvaluatorName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_evaluator#evaluator_name BedrockagentcoreEvaluator#evaluator_name}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorConfig.property.level">Level</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_evaluator#level BedrockagentcoreEvaluator#level}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_evaluator#description BedrockagentcoreEvaluator#description}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorConfig.property.evaluatorConfig">EvaluatorConfig</a></code> | <code>interface{}</code> | evaluator_config block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorConfig.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_evaluator#kms_key_arn BedrockagentcoreEvaluator#kms_key_arn}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_evaluator#tags BedrockagentcoreEvaluator#tags}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeouts">BedrockagentcoreEvaluatorTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EvaluatorName`<sup>Required</sup> <a name="EvaluatorName" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorConfig.property.evaluatorName"></a>

```go
EvaluatorName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_evaluator#evaluator_name BedrockagentcoreEvaluator#evaluator_name}.

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorConfig.property.level"></a>

```go
Level *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_evaluator#level BedrockagentcoreEvaluator#level}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_evaluator#description BedrockagentcoreEvaluator#description}.

---

##### `EvaluatorConfig`<sup>Optional</sup> <a name="EvaluatorConfig" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorConfig.property.evaluatorConfig"></a>

```go
EvaluatorConfig interface{}
```

- *Type:* interface{}

evaluator_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_evaluator#evaluator_config BedrockagentcoreEvaluator#evaluator_config}

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorConfig.property.kmsKeyArn"></a>

```go
KmsKeyArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_evaluator#kms_key_arn BedrockagentcoreEvaluator#kms_key_arn}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_evaluator#region BedrockagentcoreEvaluator#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_evaluator#tags BedrockagentcoreEvaluator#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorConfig.property.timeouts"></a>

```go
Timeouts BedrockagentcoreEvaluatorTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeouts">BedrockagentcoreEvaluatorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_evaluator#timeouts BedrockagentcoreEvaluator#timeouts}

---

### BedrockagentcoreEvaluatorEvaluatorConfig <a name="BedrockagentcoreEvaluatorEvaluatorConfig" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/bedrockagentcoreevaluator"

&bedrockagentcoreevaluator.BedrockagentcoreEvaluatorEvaluatorConfig {
	CodeBased: interface{},
	LlmAsAJudge: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfig.property.codeBased">CodeBased</a></code> | <code>interface{}</code> | code_based block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfig.property.llmAsAJudge">LlmAsAJudge</a></code> | <code>interface{}</code> | llm_as_a_judge block. |

---

##### `CodeBased`<sup>Optional</sup> <a name="CodeBased" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfig.property.codeBased"></a>

```go
CodeBased interface{}
```

- *Type:* interface{}

code_based block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_evaluator#code_based BedrockagentcoreEvaluator#code_based}

---

##### `LlmAsAJudge`<sup>Optional</sup> <a name="LlmAsAJudge" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfig.property.llmAsAJudge"></a>

```go
LlmAsAJudge interface{}
```

- *Type:* interface{}

llm_as_a_judge block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_evaluator#llm_as_a_judge BedrockagentcoreEvaluator#llm_as_a_judge}

---

### BedrockagentcoreEvaluatorEvaluatorConfigCodeBased <a name="BedrockagentcoreEvaluatorEvaluatorConfigCodeBased" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBased"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBased.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/bedrockagentcoreevaluator"

&bedrockagentcoreevaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBased {
	LambdaConfig: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBased.property.lambdaConfig">LambdaConfig</a></code> | <code>interface{}</code> | lambda_config block. |

---

##### `LambdaConfig`<sup>Optional</sup> <a name="LambdaConfig" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBased.property.lambdaConfig"></a>

```go
LambdaConfig interface{}
```

- *Type:* interface{}

lambda_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_evaluator#lambda_config BedrockagentcoreEvaluator#lambda_config}

---

### BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfig <a name="BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfig" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/bedrockagentcoreevaluator"

&bedrockagentcoreevaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfig {
	LambdaArn: *string,
	LambdaTimeoutInSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfig.property.lambdaArn">LambdaArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_evaluator#lambda_arn BedrockagentcoreEvaluator#lambda_arn}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfig.property.lambdaTimeoutInSeconds">LambdaTimeoutInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_evaluator#lambda_timeout_in_seconds BedrockagentcoreEvaluator#lambda_timeout_in_seconds}. |

---

##### `LambdaArn`<sup>Required</sup> <a name="LambdaArn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfig.property.lambdaArn"></a>

```go
LambdaArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_evaluator#lambda_arn BedrockagentcoreEvaluator#lambda_arn}.

---

##### `LambdaTimeoutInSeconds`<sup>Optional</sup> <a name="LambdaTimeoutInSeconds" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfig.property.lambdaTimeoutInSeconds"></a>

```go
LambdaTimeoutInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_evaluator#lambda_timeout_in_seconds BedrockagentcoreEvaluator#lambda_timeout_in_seconds}.

---

### BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge <a name="BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/bedrockagentcoreevaluator"

&bedrockagentcoreevaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge {
	Instructions: *string,
	ModelConfig: interface{},
	RatingScale: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge.property.instructions">Instructions</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_evaluator#instructions BedrockagentcoreEvaluator#instructions}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge.property.modelConfig">ModelConfig</a></code> | <code>interface{}</code> | model_config block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge.property.ratingScale">RatingScale</a></code> | <code>interface{}</code> | rating_scale block. |

---

##### `Instructions`<sup>Required</sup> <a name="Instructions" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge.property.instructions"></a>

```go
Instructions *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_evaluator#instructions BedrockagentcoreEvaluator#instructions}.

---

##### `ModelConfig`<sup>Optional</sup> <a name="ModelConfig" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge.property.modelConfig"></a>

```go
ModelConfig interface{}
```

- *Type:* interface{}

model_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_evaluator#model_config BedrockagentcoreEvaluator#model_config}

---

##### `RatingScale`<sup>Optional</sup> <a name="RatingScale" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge.property.ratingScale"></a>

```go
RatingScale interface{}
```

- *Type:* interface{}

rating_scale block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_evaluator#rating_scale BedrockagentcoreEvaluator#rating_scale}

---

### BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfig <a name="BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfig" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/bedrockagentcoreevaluator"

&bedrockagentcoreevaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfig {
	BedrockEvaluatorModelConfig: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfig.property.bedrockEvaluatorModelConfig">BedrockEvaluatorModelConfig</a></code> | <code>interface{}</code> | bedrock_evaluator_model_config block. |

---

##### `BedrockEvaluatorModelConfig`<sup>Optional</sup> <a name="BedrockEvaluatorModelConfig" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfig.property.bedrockEvaluatorModelConfig"></a>

```go
BedrockEvaluatorModelConfig interface{}
```

- *Type:* interface{}

bedrock_evaluator_model_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_evaluator#bedrock_evaluator_model_config BedrockagentcoreEvaluator#bedrock_evaluator_model_config}

---

### BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig <a name="BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/bedrockagentcoreevaluator"

&bedrockagentcoreevaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig {
	ModelId: *string,
	AdditionalModelRequestFields: *string,
	InferenceConfig: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig.property.modelId">ModelId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_evaluator#model_id BedrockagentcoreEvaluator#model_id}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig.property.additionalModelRequestFields">AdditionalModelRequestFields</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_evaluator#additional_model_request_fields BedrockagentcoreEvaluator#additional_model_request_fields}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig.property.inferenceConfig">InferenceConfig</a></code> | <code>interface{}</code> | inference_config block. |

---

##### `ModelId`<sup>Required</sup> <a name="ModelId" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig.property.modelId"></a>

```go
ModelId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_evaluator#model_id BedrockagentcoreEvaluator#model_id}.

---

##### `AdditionalModelRequestFields`<sup>Optional</sup> <a name="AdditionalModelRequestFields" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig.property.additionalModelRequestFields"></a>

```go
AdditionalModelRequestFields *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_evaluator#additional_model_request_fields BedrockagentcoreEvaluator#additional_model_request_fields}.

---

##### `InferenceConfig`<sup>Optional</sup> <a name="InferenceConfig" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig.property.inferenceConfig"></a>

```go
InferenceConfig interface{}
```

- *Type:* interface{}

inference_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_evaluator#inference_config BedrockagentcoreEvaluator#inference_config}

---

### BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig <a name="BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/bedrockagentcoreevaluator"

&bedrockagentcoreevaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig {
	MaxTokens: *f64,
	StopSequences: *[]*string,
	Temperature: *f64,
	TopP: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig.property.maxTokens">MaxTokens</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_evaluator#max_tokens BedrockagentcoreEvaluator#max_tokens}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig.property.stopSequences">StopSequences</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_evaluator#stop_sequences BedrockagentcoreEvaluator#stop_sequences}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig.property.temperature">Temperature</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_evaluator#temperature BedrockagentcoreEvaluator#temperature}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig.property.topP">TopP</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_evaluator#top_p BedrockagentcoreEvaluator#top_p}. |

---

##### `MaxTokens`<sup>Optional</sup> <a name="MaxTokens" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig.property.maxTokens"></a>

```go
MaxTokens *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_evaluator#max_tokens BedrockagentcoreEvaluator#max_tokens}.

---

##### `StopSequences`<sup>Optional</sup> <a name="StopSequences" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig.property.stopSequences"></a>

```go
StopSequences *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_evaluator#stop_sequences BedrockagentcoreEvaluator#stop_sequences}.

---

##### `Temperature`<sup>Optional</sup> <a name="Temperature" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig.property.temperature"></a>

```go
Temperature *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_evaluator#temperature BedrockagentcoreEvaluator#temperature}.

---

##### `TopP`<sup>Optional</sup> <a name="TopP" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig.property.topP"></a>

```go
TopP *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_evaluator#top_p BedrockagentcoreEvaluator#top_p}.

---

### BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScale <a name="BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScale" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScale"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScale.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/bedrockagentcoreevaluator"

&bedrockagentcoreevaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScale {
	Categorical: interface{},
	Numerical: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScale.property.categorical">Categorical</a></code> | <code>interface{}</code> | categorical block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScale.property.numerical">Numerical</a></code> | <code>interface{}</code> | numerical block. |

---

##### `Categorical`<sup>Optional</sup> <a name="Categorical" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScale.property.categorical"></a>

```go
Categorical interface{}
```

- *Type:* interface{}

categorical block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_evaluator#categorical BedrockagentcoreEvaluator#categorical}

---

##### `Numerical`<sup>Optional</sup> <a name="Numerical" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScale.property.numerical"></a>

```go
Numerical interface{}
```

- *Type:* interface{}

numerical block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_evaluator#numerical BedrockagentcoreEvaluator#numerical}

---

### BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategorical <a name="BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategorical" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategorical"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategorical.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/bedrockagentcoreevaluator"

&bedrockagentcoreevaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategorical {
	Definition: *string,
	Label: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategorical.property.definition">Definition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_evaluator#definition BedrockagentcoreEvaluator#definition}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategorical.property.label">Label</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_evaluator#label BedrockagentcoreEvaluator#label}. |

---

##### `Definition`<sup>Required</sup> <a name="Definition" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategorical.property.definition"></a>

```go
Definition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_evaluator#definition BedrockagentcoreEvaluator#definition}.

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategorical.property.label"></a>

```go
Label *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_evaluator#label BedrockagentcoreEvaluator#label}.

---

### BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical <a name="BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/bedrockagentcoreevaluator"

&bedrockagentcoreevaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical {
	Definition: *string,
	Label: *string,
	Value: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical.property.definition">Definition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_evaluator#definition BedrockagentcoreEvaluator#definition}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical.property.label">Label</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_evaluator#label BedrockagentcoreEvaluator#label}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical.property.value">Value</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_evaluator#value BedrockagentcoreEvaluator#value}. |

---

##### `Definition`<sup>Required</sup> <a name="Definition" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical.property.definition"></a>

```go
Definition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_evaluator#definition BedrockagentcoreEvaluator#definition}.

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical.property.label"></a>

```go
Label *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_evaluator#label BedrockagentcoreEvaluator#label}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical.property.value"></a>

```go
Value *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_evaluator#value BedrockagentcoreEvaluator#value}.

---

### BedrockagentcoreEvaluatorTimeouts <a name="BedrockagentcoreEvaluatorTimeouts" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/bedrockagentcoreevaluator"

&bedrockagentcoreevaluator.BedrockagentcoreEvaluatorTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeouts.property.delete">Delete</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeouts.property.update">Update</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_evaluator#create BedrockagentcoreEvaluator#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_evaluator#delete BedrockagentcoreEvaluator#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_evaluator#update BedrockagentcoreEvaluator#update}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList <a name="BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/bedrockagentcoreevaluator"

bedrockagentcoreevaluator.NewBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList.get"></a>

```go
func Get(index *f64) BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference <a name="BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/bedrockagentcoreevaluator"

bedrockagentcoreevaluator.NewBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.resetLambdaTimeoutInSeconds">ResetLambdaTimeoutInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLambdaTimeoutInSeconds` <a name="ResetLambdaTimeoutInSeconds" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.resetLambdaTimeoutInSeconds"></a>

```go
func ResetLambdaTimeoutInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.property.lambdaArnInput">LambdaArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.property.lambdaTimeoutInSecondsInput">LambdaTimeoutInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.property.lambdaArn">LambdaArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.property.lambdaTimeoutInSeconds">LambdaTimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LambdaArnInput`<sup>Optional</sup> <a name="LambdaArnInput" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.property.lambdaArnInput"></a>

```go
func LambdaArnInput() *string
```

- *Type:* *string

---

##### `LambdaTimeoutInSecondsInput`<sup>Optional</sup> <a name="LambdaTimeoutInSecondsInput" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.property.lambdaTimeoutInSecondsInput"></a>

```go
func LambdaTimeoutInSecondsInput() *f64
```

- *Type:* *f64

---

##### `LambdaArn`<sup>Required</sup> <a name="LambdaArn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.property.lambdaArn"></a>

```go
func LambdaArn() *string
```

- *Type:* *string

---

##### `LambdaTimeoutInSeconds`<sup>Required</sup> <a name="LambdaTimeoutInSeconds" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.property.lambdaTimeoutInSeconds"></a>

```go
func LambdaTimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList <a name="BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/bedrockagentcoreevaluator"

bedrockagentcoreevaluator.NewBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList.get"></a>

```go
func Get(index *f64) BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference <a name="BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/bedrockagentcoreevaluator"

bedrockagentcoreevaluator.NewBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.putLambdaConfig">PutLambdaConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.resetLambdaConfig">ResetLambdaConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLambdaConfig` <a name="PutLambdaConfig" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.putLambdaConfig"></a>

```go
func PutLambdaConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.putLambdaConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetLambdaConfig` <a name="ResetLambdaConfig" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.resetLambdaConfig"></a>

```go
func ResetLambdaConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.property.lambdaConfig">LambdaConfig</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList">BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.property.lambdaConfigInput">LambdaConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LambdaConfig`<sup>Required</sup> <a name="LambdaConfig" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.property.lambdaConfig"></a>

```go
func LambdaConfig() BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList">BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList</a>

---

##### `LambdaConfigInput`<sup>Optional</sup> <a name="LambdaConfigInput" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.property.lambdaConfigInput"></a>

```go
func LambdaConfigInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreEvaluatorEvaluatorConfigList <a name="BedrockagentcoreEvaluatorEvaluatorConfigList" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/bedrockagentcoreevaluator"

bedrockagentcoreevaluator.NewBedrockagentcoreEvaluatorEvaluatorConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockagentcoreEvaluatorEvaluatorConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigList.get"></a>

```go
func Get(index *f64) BedrockagentcoreEvaluatorEvaluatorConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList <a name="BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/bedrockagentcoreevaluator"

bedrockagentcoreevaluator.NewBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList.get"></a>

```go
func Get(index *f64) BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList <a name="BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/bedrockagentcoreevaluator"

bedrockagentcoreevaluator.NewBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList.get"></a>

```go
func Get(index *f64) BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference <a name="BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/bedrockagentcoreevaluator"

bedrockagentcoreevaluator.NewBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.resetMaxTokens">ResetMaxTokens</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.resetStopSequences">ResetStopSequences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.resetTemperature">ResetTemperature</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.resetTopP">ResetTopP</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxTokens` <a name="ResetMaxTokens" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.resetMaxTokens"></a>

```go
func ResetMaxTokens()
```

##### `ResetStopSequences` <a name="ResetStopSequences" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.resetStopSequences"></a>

```go
func ResetStopSequences()
```

##### `ResetTemperature` <a name="ResetTemperature" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.resetTemperature"></a>

```go
func ResetTemperature()
```

##### `ResetTopP` <a name="ResetTopP" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.resetTopP"></a>

```go
func ResetTopP()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.property.maxTokensInput">MaxTokensInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.property.stopSequencesInput">StopSequencesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.property.temperatureInput">TemperatureInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.property.topPInput">TopPInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.property.maxTokens">MaxTokens</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.property.stopSequences">StopSequences</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.property.temperature">Temperature</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.property.topP">TopP</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxTokensInput`<sup>Optional</sup> <a name="MaxTokensInput" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.property.maxTokensInput"></a>

```go
func MaxTokensInput() *f64
```

- *Type:* *f64

---

##### `StopSequencesInput`<sup>Optional</sup> <a name="StopSequencesInput" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.property.stopSequencesInput"></a>

```go
func StopSequencesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TemperatureInput`<sup>Optional</sup> <a name="TemperatureInput" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.property.temperatureInput"></a>

```go
func TemperatureInput() *f64
```

- *Type:* *f64

---

##### `TopPInput`<sup>Optional</sup> <a name="TopPInput" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.property.topPInput"></a>

```go
func TopPInput() *f64
```

- *Type:* *f64

---

##### `MaxTokens`<sup>Required</sup> <a name="MaxTokens" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.property.maxTokens"></a>

```go
func MaxTokens() *f64
```

- *Type:* *f64

---

##### `StopSequences`<sup>Required</sup> <a name="StopSequences" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.property.stopSequences"></a>

```go
func StopSequences() *[]*string
```

- *Type:* *[]*string

---

##### `Temperature`<sup>Required</sup> <a name="Temperature" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.property.temperature"></a>

```go
func Temperature() *f64
```

- *Type:* *f64

---

##### `TopP`<sup>Required</sup> <a name="TopP" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.property.topP"></a>

```go
func TopP() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList <a name="BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/bedrockagentcoreevaluator"

bedrockagentcoreevaluator.NewBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList.get"></a>

```go
func Get(index *f64) BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference <a name="BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/bedrockagentcoreevaluator"

bedrockagentcoreevaluator.NewBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.putInferenceConfig">PutInferenceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.resetAdditionalModelRequestFields">ResetAdditionalModelRequestFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.resetInferenceConfig">ResetInferenceConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInferenceConfig` <a name="PutInferenceConfig" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.putInferenceConfig"></a>

```go
func PutInferenceConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.putInferenceConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAdditionalModelRequestFields` <a name="ResetAdditionalModelRequestFields" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.resetAdditionalModelRequestFields"></a>

```go
func ResetAdditionalModelRequestFields()
```

##### `ResetInferenceConfig` <a name="ResetInferenceConfig" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.resetInferenceConfig"></a>

```go
func ResetInferenceConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.property.inferenceConfig">InferenceConfig</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.property.additionalModelRequestFieldsInput">AdditionalModelRequestFieldsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.property.inferenceConfigInput">InferenceConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.property.modelIdInput">ModelIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.property.additionalModelRequestFields">AdditionalModelRequestFields</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.property.modelId">ModelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InferenceConfig`<sup>Required</sup> <a name="InferenceConfig" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.property.inferenceConfig"></a>

```go
func InferenceConfig() BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList</a>

---

##### `AdditionalModelRequestFieldsInput`<sup>Optional</sup> <a name="AdditionalModelRequestFieldsInput" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.property.additionalModelRequestFieldsInput"></a>

```go
func AdditionalModelRequestFieldsInput() *string
```

- *Type:* *string

---

##### `InferenceConfigInput`<sup>Optional</sup> <a name="InferenceConfigInput" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.property.inferenceConfigInput"></a>

```go
func InferenceConfigInput() interface{}
```

- *Type:* interface{}

---

##### `ModelIdInput`<sup>Optional</sup> <a name="ModelIdInput" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.property.modelIdInput"></a>

```go
func ModelIdInput() *string
```

- *Type:* *string

---

##### `AdditionalModelRequestFields`<sup>Required</sup> <a name="AdditionalModelRequestFields" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.property.additionalModelRequestFields"></a>

```go
func AdditionalModelRequestFields() *string
```

- *Type:* *string

---

##### `ModelId`<sup>Required</sup> <a name="ModelId" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.property.modelId"></a>

```go
func ModelId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList <a name="BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/bedrockagentcoreevaluator"

bedrockagentcoreevaluator.NewBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList.get"></a>

```go
func Get(index *f64) BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference <a name="BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/bedrockagentcoreevaluator"

bedrockagentcoreevaluator.NewBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.putBedrockEvaluatorModelConfig">PutBedrockEvaluatorModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.resetBedrockEvaluatorModelConfig">ResetBedrockEvaluatorModelConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBedrockEvaluatorModelConfig` <a name="PutBedrockEvaluatorModelConfig" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.putBedrockEvaluatorModelConfig"></a>

```go
func PutBedrockEvaluatorModelConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.putBedrockEvaluatorModelConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBedrockEvaluatorModelConfig` <a name="ResetBedrockEvaluatorModelConfig" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.resetBedrockEvaluatorModelConfig"></a>

```go
func ResetBedrockEvaluatorModelConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.property.bedrockEvaluatorModelConfig">BedrockEvaluatorModelConfig</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.property.bedrockEvaluatorModelConfigInput">BedrockEvaluatorModelConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BedrockEvaluatorModelConfig`<sup>Required</sup> <a name="BedrockEvaluatorModelConfig" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.property.bedrockEvaluatorModelConfig"></a>

```go
func BedrockEvaluatorModelConfig() BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList</a>

---

##### `BedrockEvaluatorModelConfigInput`<sup>Optional</sup> <a name="BedrockEvaluatorModelConfigInput" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.property.bedrockEvaluatorModelConfigInput"></a>

```go
func BedrockEvaluatorModelConfigInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference <a name="BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/bedrockagentcoreevaluator"

bedrockagentcoreevaluator.NewBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.putModelConfig">PutModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.putRatingScale">PutRatingScale</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.resetModelConfig">ResetModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.resetRatingScale">ResetRatingScale</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutModelConfig` <a name="PutModelConfig" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.putModelConfig"></a>

```go
func PutModelConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.putModelConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRatingScale` <a name="PutRatingScale" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.putRatingScale"></a>

```go
func PutRatingScale(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.putRatingScale.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetModelConfig` <a name="ResetModelConfig" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.resetModelConfig"></a>

```go
func ResetModelConfig()
```

##### `ResetRatingScale` <a name="ResetRatingScale" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.resetRatingScale"></a>

```go
func ResetRatingScale()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.property.modelConfig">ModelConfig</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.property.ratingScale">RatingScale</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.property.instructionsInput">InstructionsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.property.modelConfigInput">ModelConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.property.ratingScaleInput">RatingScaleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.property.instructions">Instructions</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModelConfig`<sup>Required</sup> <a name="ModelConfig" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.property.modelConfig"></a>

```go
func ModelConfig() BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList</a>

---

##### `RatingScale`<sup>Required</sup> <a name="RatingScale" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.property.ratingScale"></a>

```go
func RatingScale() BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList</a>

---

##### `InstructionsInput`<sup>Optional</sup> <a name="InstructionsInput" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.property.instructionsInput"></a>

```go
func InstructionsInput() *string
```

- *Type:* *string

---

##### `ModelConfigInput`<sup>Optional</sup> <a name="ModelConfigInput" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.property.modelConfigInput"></a>

```go
func ModelConfigInput() interface{}
```

- *Type:* interface{}

---

##### `RatingScaleInput`<sup>Optional</sup> <a name="RatingScaleInput" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.property.ratingScaleInput"></a>

```go
func RatingScaleInput() interface{}
```

- *Type:* interface{}

---

##### `Instructions`<sup>Required</sup> <a name="Instructions" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.property.instructions"></a>

```go
func Instructions() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList <a name="BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/bedrockagentcoreevaluator"

bedrockagentcoreevaluator.NewBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.get"></a>

```go
func Get(index *f64) BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference <a name="BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/bedrockagentcoreevaluator"

bedrockagentcoreevaluator.NewBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.property.definitionInput">DefinitionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.property.labelInput">LabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.property.definition">Definition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.property.label">Label</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefinitionInput`<sup>Optional</sup> <a name="DefinitionInput" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.property.definitionInput"></a>

```go
func DefinitionInput() *string
```

- *Type:* *string

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.property.labelInput"></a>

```go
func LabelInput() *string
```

- *Type:* *string

---

##### `Definition`<sup>Required</sup> <a name="Definition" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.property.definition"></a>

```go
func Definition() *string
```

- *Type:* *string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.property.label"></a>

```go
func Label() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList <a name="BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/bedrockagentcoreevaluator"

bedrockagentcoreevaluator.NewBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList.get"></a>

```go
func Get(index *f64) BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList <a name="BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/bedrockagentcoreevaluator"

bedrockagentcoreevaluator.NewBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.get"></a>

```go
func Get(index *f64) BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference <a name="BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/bedrockagentcoreevaluator"

bedrockagentcoreevaluator.NewBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.property.definitionInput">DefinitionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.property.labelInput">LabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.property.valueInput">ValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.property.definition">Definition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.property.label">Label</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefinitionInput`<sup>Optional</sup> <a name="DefinitionInput" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.property.definitionInput"></a>

```go
func DefinitionInput() *string
```

- *Type:* *string

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.property.labelInput"></a>

```go
func LabelInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.property.valueInput"></a>

```go
func ValueInput() *f64
```

- *Type:* *f64

---

##### `Definition`<sup>Required</sup> <a name="Definition" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.property.definition"></a>

```go
func Definition() *string
```

- *Type:* *string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.property.label"></a>

```go
func Label() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference <a name="BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/bedrockagentcoreevaluator"

bedrockagentcoreevaluator.NewBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.putCategorical">PutCategorical</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.putNumerical">PutNumerical</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.resetCategorical">ResetCategorical</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.resetNumerical">ResetNumerical</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCategorical` <a name="PutCategorical" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.putCategorical"></a>

```go
func PutCategorical(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.putCategorical.parameter.value"></a>

- *Type:* interface{}

---

##### `PutNumerical` <a name="PutNumerical" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.putNumerical"></a>

```go
func PutNumerical(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.putNumerical.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCategorical` <a name="ResetCategorical" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.resetCategorical"></a>

```go
func ResetCategorical()
```

##### `ResetNumerical` <a name="ResetNumerical" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.resetNumerical"></a>

```go
func ResetNumerical()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.property.categorical">Categorical</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.property.numerical">Numerical</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.property.categoricalInput">CategoricalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.property.numericalInput">NumericalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Categorical`<sup>Required</sup> <a name="Categorical" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.property.categorical"></a>

```go
func Categorical() BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList</a>

---

##### `Numerical`<sup>Required</sup> <a name="Numerical" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.property.numerical"></a>

```go
func Numerical() BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList</a>

---

##### `CategoricalInput`<sup>Optional</sup> <a name="CategoricalInput" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.property.categoricalInput"></a>

```go
func CategoricalInput() interface{}
```

- *Type:* interface{}

---

##### `NumericalInput`<sup>Optional</sup> <a name="NumericalInput" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.property.numericalInput"></a>

```go
func NumericalInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreEvaluatorEvaluatorConfigOutputReference <a name="BedrockagentcoreEvaluatorEvaluatorConfigOutputReference" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/bedrockagentcoreevaluator"

bedrockagentcoreevaluator.NewBedrockagentcoreEvaluatorEvaluatorConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockagentcoreEvaluatorEvaluatorConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.putCodeBased">PutCodeBased</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.putLlmAsAJudge">PutLlmAsAJudge</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.resetCodeBased">ResetCodeBased</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.resetLlmAsAJudge">ResetLlmAsAJudge</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCodeBased` <a name="PutCodeBased" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.putCodeBased"></a>

```go
func PutCodeBased(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.putCodeBased.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLlmAsAJudge` <a name="PutLlmAsAJudge" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.putLlmAsAJudge"></a>

```go
func PutLlmAsAJudge(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.putLlmAsAJudge.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCodeBased` <a name="ResetCodeBased" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.resetCodeBased"></a>

```go
func ResetCodeBased()
```

##### `ResetLlmAsAJudge` <a name="ResetLlmAsAJudge" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.resetLlmAsAJudge"></a>

```go
func ResetLlmAsAJudge()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.property.codeBased">CodeBased</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList">BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.property.llmAsAJudge">LlmAsAJudge</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.property.codeBasedInput">CodeBasedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.property.llmAsAJudgeInput">LlmAsAJudgeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CodeBased`<sup>Required</sup> <a name="CodeBased" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.property.codeBased"></a>

```go
func CodeBased() BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList">BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList</a>

---

##### `LlmAsAJudge`<sup>Required</sup> <a name="LlmAsAJudge" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.property.llmAsAJudge"></a>

```go
func LlmAsAJudge() BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList">BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList</a>

---

##### `CodeBasedInput`<sup>Optional</sup> <a name="CodeBasedInput" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.property.codeBasedInput"></a>

```go
func CodeBasedInput() interface{}
```

- *Type:* interface{}

---

##### `LlmAsAJudgeInput`<sup>Optional</sup> <a name="LlmAsAJudgeInput" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.property.llmAsAJudgeInput"></a>

```go
func LlmAsAJudgeInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorEvaluatorConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreEvaluatorTimeoutsOutputReference <a name="BedrockagentcoreEvaluatorTimeoutsOutputReference" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/bedrockagentcoreevaluator"

bedrockagentcoreevaluator.NewBedrockagentcoreEvaluatorTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcoreEvaluatorTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockagentcoreEvaluator.BedrockagentcoreEvaluatorTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



