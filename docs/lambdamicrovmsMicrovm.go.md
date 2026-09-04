# `lambdamicrovmsMicrovm` Submodule <a name="`lambdamicrovmsMicrovm` Submodule" id="@cdktn/provider-aws.lambdamicrovmsMicrovm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdamicrovmsMicrovm <a name="LambdamicrovmsMicrovm" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm aws_lambdamicrovms_microvm}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/lambdamicrovmsmicrovm"

lambdamicrovmsmicrovm.NewLambdamicrovmsMicrovm(scope Construct, id *string, config LambdamicrovmsMicrovmConfig) LambdamicrovmsMicrovm
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig">LambdamicrovmsMicrovmConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig">LambdamicrovmsMicrovmConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.putIdlePolicy">PutIdlePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.putLogging">PutLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetEgressNetworkConnectors">ResetEgressNetworkConnectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetExecutionRoleArn">ResetExecutionRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetIdlePolicy">ResetIdlePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetImageVersion">ResetImageVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetIngressNetworkConnectors">ResetIngressNetworkConnectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetLogging">ResetLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetMaximumDurationInSeconds">ResetMaximumDurationInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetRunHookPayload">ResetRunHookPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIdlePolicy` <a name="PutIdlePolicy" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.putIdlePolicy"></a>

```go
func PutIdlePolicy(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.putIdlePolicy.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLogging` <a name="PutLogging" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.putLogging"></a>

```go
func PutLogging(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.putLogging.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.putTimeouts"></a>

```go
func PutTimeouts(value LambdamicrovmsMicrovmTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeouts">LambdamicrovmsMicrovmTimeouts</a>

---

##### `ResetEgressNetworkConnectors` <a name="ResetEgressNetworkConnectors" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetEgressNetworkConnectors"></a>

```go
func ResetEgressNetworkConnectors()
```

##### `ResetExecutionRoleArn` <a name="ResetExecutionRoleArn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetExecutionRoleArn"></a>

```go
func ResetExecutionRoleArn()
```

##### `ResetIdlePolicy` <a name="ResetIdlePolicy" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetIdlePolicy"></a>

```go
func ResetIdlePolicy()
```

##### `ResetImageVersion` <a name="ResetImageVersion" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetImageVersion"></a>

```go
func ResetImageVersion()
```

##### `ResetIngressNetworkConnectors` <a name="ResetIngressNetworkConnectors" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetIngressNetworkConnectors"></a>

```go
func ResetIngressNetworkConnectors()
```

##### `ResetLogging` <a name="ResetLogging" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetLogging"></a>

```go
func ResetLogging()
```

##### `ResetMaximumDurationInSeconds` <a name="ResetMaximumDurationInSeconds" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetMaximumDurationInSeconds"></a>

```go
func ResetMaximumDurationInSeconds()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetRunHookPayload` <a name="ResetRunHookPayload" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetRunHookPayload"></a>

```go
func ResetRunHookPayload()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LambdamicrovmsMicrovm resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/lambdamicrovmsmicrovm"

lambdamicrovmsmicrovm.LambdamicrovmsMicrovm_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/lambdamicrovmsmicrovm"

lambdamicrovmsmicrovm.LambdamicrovmsMicrovm_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/lambdamicrovmsmicrovm"

lambdamicrovmsmicrovm.LambdamicrovmsMicrovm_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/lambdamicrovmsmicrovm"

lambdamicrovmsmicrovm.LambdamicrovmsMicrovm_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a LambdamicrovmsMicrovm resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LambdamicrovmsMicrovm to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LambdamicrovmsMicrovm that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the LambdamicrovmsMicrovm to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.idlePolicy">IdlePolicy</a></code> | <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList">LambdamicrovmsMicrovmIdlePolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.logging">Logging</a></code> | <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList">LambdamicrovmsMicrovmLoggingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.microvmId">MicrovmId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.startedAt">StartedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference">LambdamicrovmsMicrovmTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.egressNetworkConnectorsInput">EgressNetworkConnectorsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.executionRoleArnInput">ExecutionRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.idlePolicyInput">IdlePolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.imageArnInput">ImageArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.imageVersionInput">ImageVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.ingressNetworkConnectorsInput">IngressNetworkConnectorsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.loggingInput">LoggingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.maximumDurationInSecondsInput">MaximumDurationInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.runHookPayloadInput">RunHookPayloadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.egressNetworkConnectors">EgressNetworkConnectors</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.imageArn">ImageArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.imageVersion">ImageVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.ingressNetworkConnectors">IngressNetworkConnectors</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.maximumDurationInSeconds">MaximumDurationInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.runHookPayload">RunHookPayload</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `IdlePolicy`<sup>Required</sup> <a name="IdlePolicy" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.idlePolicy"></a>

```go
func IdlePolicy() LambdamicrovmsMicrovmIdlePolicyList
```

- *Type:* <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList">LambdamicrovmsMicrovmIdlePolicyList</a>

---

##### `Logging`<sup>Required</sup> <a name="Logging" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.logging"></a>

```go
func Logging() LambdamicrovmsMicrovmLoggingList
```

- *Type:* <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList">LambdamicrovmsMicrovmLoggingList</a>

---

##### `MicrovmId`<sup>Required</sup> <a name="MicrovmId" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.microvmId"></a>

```go
func MicrovmId() *string
```

- *Type:* *string

---

##### `StartedAt`<sup>Required</sup> <a name="StartedAt" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.startedAt"></a>

```go
func StartedAt() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.timeouts"></a>

```go
func Timeouts() LambdamicrovmsMicrovmTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference">LambdamicrovmsMicrovmTimeoutsOutputReference</a>

---

##### `EgressNetworkConnectorsInput`<sup>Optional</sup> <a name="EgressNetworkConnectorsInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.egressNetworkConnectorsInput"></a>

```go
func EgressNetworkConnectorsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExecutionRoleArnInput`<sup>Optional</sup> <a name="ExecutionRoleArnInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.executionRoleArnInput"></a>

```go
func ExecutionRoleArnInput() *string
```

- *Type:* *string

---

##### `IdlePolicyInput`<sup>Optional</sup> <a name="IdlePolicyInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.idlePolicyInput"></a>

```go
func IdlePolicyInput() interface{}
```

- *Type:* interface{}

---

##### `ImageArnInput`<sup>Optional</sup> <a name="ImageArnInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.imageArnInput"></a>

```go
func ImageArnInput() *string
```

- *Type:* *string

---

##### `ImageVersionInput`<sup>Optional</sup> <a name="ImageVersionInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.imageVersionInput"></a>

```go
func ImageVersionInput() *string
```

- *Type:* *string

---

##### `IngressNetworkConnectorsInput`<sup>Optional</sup> <a name="IngressNetworkConnectorsInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.ingressNetworkConnectorsInput"></a>

```go
func IngressNetworkConnectorsInput() *[]*string
```

- *Type:* *[]*string

---

##### `LoggingInput`<sup>Optional</sup> <a name="LoggingInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.loggingInput"></a>

```go
func LoggingInput() interface{}
```

- *Type:* interface{}

---

##### `MaximumDurationInSecondsInput`<sup>Optional</sup> <a name="MaximumDurationInSecondsInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.maximumDurationInSecondsInput"></a>

```go
func MaximumDurationInSecondsInput() *f64
```

- *Type:* *f64

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RunHookPayloadInput`<sup>Optional</sup> <a name="RunHookPayloadInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.runHookPayloadInput"></a>

```go
func RunHookPayloadInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `EgressNetworkConnectors`<sup>Required</sup> <a name="EgressNetworkConnectors" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.egressNetworkConnectors"></a>

```go
func EgressNetworkConnectors() *[]*string
```

- *Type:* *[]*string

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.executionRoleArn"></a>

```go
func ExecutionRoleArn() *string
```

- *Type:* *string

---

##### `ImageArn`<sup>Required</sup> <a name="ImageArn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.imageArn"></a>

```go
func ImageArn() *string
```

- *Type:* *string

---

##### `ImageVersion`<sup>Required</sup> <a name="ImageVersion" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.imageVersion"></a>

```go
func ImageVersion() *string
```

- *Type:* *string

---

##### `IngressNetworkConnectors`<sup>Required</sup> <a name="IngressNetworkConnectors" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.ingressNetworkConnectors"></a>

```go
func IngressNetworkConnectors() *[]*string
```

- *Type:* *[]*string

---

##### `MaximumDurationInSeconds`<sup>Required</sup> <a name="MaximumDurationInSeconds" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.maximumDurationInSeconds"></a>

```go
func MaximumDurationInSeconds() *f64
```

- *Type:* *f64

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `RunHookPayload`<sup>Required</sup> <a name="RunHookPayload" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.runHookPayload"></a>

```go
func RunHookPayload() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LambdamicrovmsMicrovmConfig <a name="LambdamicrovmsMicrovmConfig" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/lambdamicrovmsmicrovm"

&lambdamicrovmsmicrovm.LambdamicrovmsMicrovmConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ImageArn: *string,
	EgressNetworkConnectors: *[]*string,
	ExecutionRoleArn: *string,
	IdlePolicy: interface{},
	ImageVersion: *string,
	IngressNetworkConnectors: *[]*string,
	Logging: interface{},
	MaximumDurationInSeconds: *f64,
	Region: *string,
	RunHookPayload: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-aws-go/aws/v25.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.imageArn">ImageArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#image_arn LambdamicrovmsMicrovm#image_arn}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.egressNetworkConnectors">EgressNetworkConnectors</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#egress_network_connectors LambdamicrovmsMicrovm#egress_network_connectors}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#execution_role_arn LambdamicrovmsMicrovm#execution_role_arn}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.idlePolicy">IdlePolicy</a></code> | <code>interface{}</code> | idle_policy block. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.imageVersion">ImageVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#image_version LambdamicrovmsMicrovm#image_version}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.ingressNetworkConnectors">IngressNetworkConnectors</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#ingress_network_connectors LambdamicrovmsMicrovm#ingress_network_connectors}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.logging">Logging</a></code> | <code>interface{}</code> | logging block. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.maximumDurationInSeconds">MaximumDurationInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#maximum_duration_in_seconds LambdamicrovmsMicrovm#maximum_duration_in_seconds}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.runHookPayload">RunHookPayload</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#run_hook_payload LambdamicrovmsMicrovm#run_hook_payload}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeouts">LambdamicrovmsMicrovmTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ImageArn`<sup>Required</sup> <a name="ImageArn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.imageArn"></a>

```go
ImageArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#image_arn LambdamicrovmsMicrovm#image_arn}.

---

##### `EgressNetworkConnectors`<sup>Optional</sup> <a name="EgressNetworkConnectors" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.egressNetworkConnectors"></a>

```go
EgressNetworkConnectors *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#egress_network_connectors LambdamicrovmsMicrovm#egress_network_connectors}.

---

##### `ExecutionRoleArn`<sup>Optional</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.executionRoleArn"></a>

```go
ExecutionRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#execution_role_arn LambdamicrovmsMicrovm#execution_role_arn}.

---

##### `IdlePolicy`<sup>Optional</sup> <a name="IdlePolicy" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.idlePolicy"></a>

```go
IdlePolicy interface{}
```

- *Type:* interface{}

idle_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#idle_policy LambdamicrovmsMicrovm#idle_policy}

---

##### `ImageVersion`<sup>Optional</sup> <a name="ImageVersion" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.imageVersion"></a>

```go
ImageVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#image_version LambdamicrovmsMicrovm#image_version}.

---

##### `IngressNetworkConnectors`<sup>Optional</sup> <a name="IngressNetworkConnectors" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.ingressNetworkConnectors"></a>

```go
IngressNetworkConnectors *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#ingress_network_connectors LambdamicrovmsMicrovm#ingress_network_connectors}.

---

##### `Logging`<sup>Optional</sup> <a name="Logging" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.logging"></a>

```go
Logging interface{}
```

- *Type:* interface{}

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#logging LambdamicrovmsMicrovm#logging}

---

##### `MaximumDurationInSeconds`<sup>Optional</sup> <a name="MaximumDurationInSeconds" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.maximumDurationInSeconds"></a>

```go
MaximumDurationInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#maximum_duration_in_seconds LambdamicrovmsMicrovm#maximum_duration_in_seconds}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#region LambdamicrovmsMicrovm#region}

---

##### `RunHookPayload`<sup>Optional</sup> <a name="RunHookPayload" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.runHookPayload"></a>

```go
RunHookPayload *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#run_hook_payload LambdamicrovmsMicrovm#run_hook_payload}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.timeouts"></a>

```go
Timeouts LambdamicrovmsMicrovmTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeouts">LambdamicrovmsMicrovmTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#timeouts LambdamicrovmsMicrovm#timeouts}

---

### LambdamicrovmsMicrovmIdlePolicy <a name="LambdamicrovmsMicrovmIdlePolicy" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/lambdamicrovmsmicrovm"

&lambdamicrovmsmicrovm.LambdamicrovmsMicrovmIdlePolicy {
	AutoResumeEnabled: interface{},
	MaxIdleDurationSeconds: *f64,
	SuspendedDurationSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy.property.autoResumeEnabled">AutoResumeEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#auto_resume_enabled LambdamicrovmsMicrovm#auto_resume_enabled}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy.property.maxIdleDurationSeconds">MaxIdleDurationSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#max_idle_duration_seconds LambdamicrovmsMicrovm#max_idle_duration_seconds}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy.property.suspendedDurationSeconds">SuspendedDurationSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#suspended_duration_seconds LambdamicrovmsMicrovm#suspended_duration_seconds}. |

---

##### `AutoResumeEnabled`<sup>Required</sup> <a name="AutoResumeEnabled" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy.property.autoResumeEnabled"></a>

```go
AutoResumeEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#auto_resume_enabled LambdamicrovmsMicrovm#auto_resume_enabled}.

---

##### `MaxIdleDurationSeconds`<sup>Required</sup> <a name="MaxIdleDurationSeconds" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy.property.maxIdleDurationSeconds"></a>

```go
MaxIdleDurationSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#max_idle_duration_seconds LambdamicrovmsMicrovm#max_idle_duration_seconds}.

---

##### `SuspendedDurationSeconds`<sup>Required</sup> <a name="SuspendedDurationSeconds" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy.property.suspendedDurationSeconds"></a>

```go
SuspendedDurationSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#suspended_duration_seconds LambdamicrovmsMicrovm#suspended_duration_seconds}.

---

### LambdamicrovmsMicrovmLogging <a name="LambdamicrovmsMicrovmLogging" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLogging"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLogging.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/lambdamicrovmsmicrovm"

&lambdamicrovmsmicrovm.LambdamicrovmsMicrovmLogging {
	Cloudwatch: interface{},
	Disabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLogging.property.cloudwatch">Cloudwatch</a></code> | <code>interface{}</code> | cloudwatch block. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLogging.property.disabled">Disabled</a></code> | <code>interface{}</code> | disabled block. |

---

##### `Cloudwatch`<sup>Optional</sup> <a name="Cloudwatch" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLogging.property.cloudwatch"></a>

```go
Cloudwatch interface{}
```

- *Type:* interface{}

cloudwatch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#cloudwatch LambdamicrovmsMicrovm#cloudwatch}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLogging.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

disabled block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#disabled LambdamicrovmsMicrovm#disabled}

---

### LambdamicrovmsMicrovmLoggingCloudwatch <a name="LambdamicrovmsMicrovmLoggingCloudwatch" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatch.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/lambdamicrovmsmicrovm"

&lambdamicrovmsmicrovm.LambdamicrovmsMicrovmLoggingCloudwatch {
	LogGroup: *string,
	LogStream: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatch.property.logGroup">LogGroup</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#log_group LambdamicrovmsMicrovm#log_group}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatch.property.logStream">LogStream</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#log_stream LambdamicrovmsMicrovm#log_stream}. |

---

##### `LogGroup`<sup>Optional</sup> <a name="LogGroup" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatch.property.logGroup"></a>

```go
LogGroup *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#log_group LambdamicrovmsMicrovm#log_group}.

---

##### `LogStream`<sup>Optional</sup> <a name="LogStream" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatch.property.logStream"></a>

```go
LogStream *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#log_stream LambdamicrovmsMicrovm#log_stream}.

---

### LambdamicrovmsMicrovmLoggingDisabled <a name="LambdamicrovmsMicrovmLoggingDisabled" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabled"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabled.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/lambdamicrovmsmicrovm"

&lambdamicrovmsmicrovm.LambdamicrovmsMicrovmLoggingDisabled {

}
```


### LambdamicrovmsMicrovmTimeouts <a name="LambdamicrovmsMicrovmTimeouts" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/lambdamicrovmsmicrovm"

&lambdamicrovmsmicrovm.LambdamicrovmsMicrovmTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeouts.property.delete">Delete</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#create LambdamicrovmsMicrovm#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#delete LambdamicrovmsMicrovm#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### LambdamicrovmsMicrovmIdlePolicyList <a name="LambdamicrovmsMicrovmIdlePolicyList" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/lambdamicrovmsmicrovm"

lambdamicrovmsmicrovm.NewLambdamicrovmsMicrovmIdlePolicyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LambdamicrovmsMicrovmIdlePolicyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.get"></a>

```go
func Get(index *f64) LambdamicrovmsMicrovmIdlePolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LambdamicrovmsMicrovmIdlePolicyOutputReference <a name="LambdamicrovmsMicrovmIdlePolicyOutputReference" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/lambdamicrovmsmicrovm"

lambdamicrovmsmicrovm.NewLambdamicrovmsMicrovmIdlePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LambdamicrovmsMicrovmIdlePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.autoResumeEnabledInput">AutoResumeEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.maxIdleDurationSecondsInput">MaxIdleDurationSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.suspendedDurationSecondsInput">SuspendedDurationSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.autoResumeEnabled">AutoResumeEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.maxIdleDurationSeconds">MaxIdleDurationSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.suspendedDurationSeconds">SuspendedDurationSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoResumeEnabledInput`<sup>Optional</sup> <a name="AutoResumeEnabledInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.autoResumeEnabledInput"></a>

```go
func AutoResumeEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `MaxIdleDurationSecondsInput`<sup>Optional</sup> <a name="MaxIdleDurationSecondsInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.maxIdleDurationSecondsInput"></a>

```go
func MaxIdleDurationSecondsInput() *f64
```

- *Type:* *f64

---

##### `SuspendedDurationSecondsInput`<sup>Optional</sup> <a name="SuspendedDurationSecondsInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.suspendedDurationSecondsInput"></a>

```go
func SuspendedDurationSecondsInput() *f64
```

- *Type:* *f64

---

##### `AutoResumeEnabled`<sup>Required</sup> <a name="AutoResumeEnabled" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.autoResumeEnabled"></a>

```go
func AutoResumeEnabled() interface{}
```

- *Type:* interface{}

---

##### `MaxIdleDurationSeconds`<sup>Required</sup> <a name="MaxIdleDurationSeconds" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.maxIdleDurationSeconds"></a>

```go
func MaxIdleDurationSeconds() *f64
```

- *Type:* *f64

---

##### `SuspendedDurationSeconds`<sup>Required</sup> <a name="SuspendedDurationSeconds" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.suspendedDurationSeconds"></a>

```go
func SuspendedDurationSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LambdamicrovmsMicrovmLoggingCloudwatchList <a name="LambdamicrovmsMicrovmLoggingCloudwatchList" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/lambdamicrovmsmicrovm"

lambdamicrovmsmicrovm.NewLambdamicrovmsMicrovmLoggingCloudwatchList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LambdamicrovmsMicrovmLoggingCloudwatchList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.get"></a>

```go
func Get(index *f64) LambdamicrovmsMicrovmLoggingCloudwatchOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LambdamicrovmsMicrovmLoggingCloudwatchOutputReference <a name="LambdamicrovmsMicrovmLoggingCloudwatchOutputReference" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/lambdamicrovmsmicrovm"

lambdamicrovmsmicrovm.NewLambdamicrovmsMicrovmLoggingCloudwatchOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LambdamicrovmsMicrovmLoggingCloudwatchOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.resetLogGroup">ResetLogGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.resetLogStream">ResetLogStream</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLogGroup` <a name="ResetLogGroup" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.resetLogGroup"></a>

```go
func ResetLogGroup()
```

##### `ResetLogStream` <a name="ResetLogStream" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.resetLogStream"></a>

```go
func ResetLogStream()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.property.logGroupInput">LogGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.property.logStreamInput">LogStreamInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.property.logGroup">LogGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.property.logStream">LogStream</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogGroupInput`<sup>Optional</sup> <a name="LogGroupInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.property.logGroupInput"></a>

```go
func LogGroupInput() *string
```

- *Type:* *string

---

##### `LogStreamInput`<sup>Optional</sup> <a name="LogStreamInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.property.logStreamInput"></a>

```go
func LogStreamInput() *string
```

- *Type:* *string

---

##### `LogGroup`<sup>Required</sup> <a name="LogGroup" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.property.logGroup"></a>

```go
func LogGroup() *string
```

- *Type:* *string

---

##### `LogStream`<sup>Required</sup> <a name="LogStream" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.property.logStream"></a>

```go
func LogStream() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LambdamicrovmsMicrovmLoggingDisabledList <a name="LambdamicrovmsMicrovmLoggingDisabledList" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/lambdamicrovmsmicrovm"

lambdamicrovmsmicrovm.NewLambdamicrovmsMicrovmLoggingDisabledList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LambdamicrovmsMicrovmLoggingDisabledList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.get"></a>

```go
func Get(index *f64) LambdamicrovmsMicrovmLoggingDisabledOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LambdamicrovmsMicrovmLoggingDisabledOutputReference <a name="LambdamicrovmsMicrovmLoggingDisabledOutputReference" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/lambdamicrovmsmicrovm"

lambdamicrovmsmicrovm.NewLambdamicrovmsMicrovmLoggingDisabledOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LambdamicrovmsMicrovmLoggingDisabledOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LambdamicrovmsMicrovmLoggingList <a name="LambdamicrovmsMicrovmLoggingList" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/lambdamicrovmsmicrovm"

lambdamicrovmsmicrovm.NewLambdamicrovmsMicrovmLoggingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LambdamicrovmsMicrovmLoggingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.get"></a>

```go
func Get(index *f64) LambdamicrovmsMicrovmLoggingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LambdamicrovmsMicrovmLoggingOutputReference <a name="LambdamicrovmsMicrovmLoggingOutputReference" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/lambdamicrovmsmicrovm"

lambdamicrovmsmicrovm.NewLambdamicrovmsMicrovmLoggingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LambdamicrovmsMicrovmLoggingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.putCloudwatch">PutCloudwatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.putDisabled">PutDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.resetCloudwatch">ResetCloudwatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudwatch` <a name="PutCloudwatch" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.putCloudwatch"></a>

```go
func PutCloudwatch(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.putCloudwatch.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDisabled` <a name="PutDisabled" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.putDisabled"></a>

```go
func PutDisabled(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.putDisabled.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCloudwatch` <a name="ResetCloudwatch" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.resetCloudwatch"></a>

```go
func ResetCloudwatch()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.resetDisabled"></a>

```go
func ResetDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.property.cloudwatch">Cloudwatch</a></code> | <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList">LambdamicrovmsMicrovmLoggingCloudwatchList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.property.disabled">Disabled</a></code> | <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList">LambdamicrovmsMicrovmLoggingDisabledList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.property.cloudwatchInput">CloudwatchInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Cloudwatch`<sup>Required</sup> <a name="Cloudwatch" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.property.cloudwatch"></a>

```go
func Cloudwatch() LambdamicrovmsMicrovmLoggingCloudwatchList
```

- *Type:* <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList">LambdamicrovmsMicrovmLoggingCloudwatchList</a>

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.property.disabled"></a>

```go
func Disabled() LambdamicrovmsMicrovmLoggingDisabledList
```

- *Type:* <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList">LambdamicrovmsMicrovmLoggingDisabledList</a>

---

##### `CloudwatchInput`<sup>Optional</sup> <a name="CloudwatchInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.property.cloudwatchInput"></a>

```go
func CloudwatchInput() interface{}
```

- *Type:* interface{}

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LambdamicrovmsMicrovmTimeoutsOutputReference <a name="LambdamicrovmsMicrovmTimeoutsOutputReference" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/lambdamicrovmsmicrovm"

lambdamicrovmsmicrovm.NewLambdamicrovmsMicrovmTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LambdamicrovmsMicrovmTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



