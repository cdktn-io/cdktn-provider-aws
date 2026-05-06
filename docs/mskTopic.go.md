# `mskTopic` Submodule <a name="`mskTopic` Submodule" id="@cdktn/provider-aws.mskTopic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MskTopic <a name="MskTopic" id="@cdktn/provider-aws.mskTopic.MskTopic"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/msk_topic aws_msk_topic}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskTopic.MskTopic.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v23/msktopic"

msktopic.NewMskTopic(scope Construct, id *string, config MskTopicConfig) MskTopic
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopic.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopic.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopic.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.mskTopic.MskTopicConfig">MskTopicConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.mskTopic.MskTopic.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.mskTopic.MskTopic.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.mskTopic.MskTopic.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.mskTopic.MskTopicConfig">MskTopicConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopic.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopic.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopic.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopic.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopic.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopic.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopic.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopic.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopic.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopic.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopic.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopic.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopic.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopic.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopic.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopic.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopic.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopic.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopic.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopic.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopic.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopic.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopic.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopic.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopic.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopic.resetConfigs">ResetConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopic.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopic.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskTopic.MskTopic.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.mskTopic.MskTopic.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.mskTopic.MskTopic.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.mskTopic.MskTopic.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.mskTopic.MskTopic.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskTopic.MskTopic.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.mskTopic.MskTopic.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.mskTopic.MskTopic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.mskTopic.MskTopic.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.mskTopic.MskTopic.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.mskTopic.MskTopic.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.mskTopic.MskTopic.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.mskTopic.MskTopic.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.mskTopic.MskTopic.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.mskTopic.MskTopic.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskTopic.MskTopic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.mskTopic.MskTopic.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskTopic.MskTopic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.mskTopic.MskTopic.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskTopic.MskTopic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.mskTopic.MskTopic.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskTopic.MskTopic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.mskTopic.MskTopic.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskTopic.MskTopic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.mskTopic.MskTopic.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskTopic.MskTopic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.mskTopic.MskTopic.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskTopic.MskTopic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.mskTopic.MskTopic.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskTopic.MskTopic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.mskTopic.MskTopic.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskTopic.MskTopic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.mskTopic.MskTopic.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.mskTopic.MskTopic.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.mskTopic.MskTopic.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.mskTopic.MskTopic.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.mskTopic.MskTopic.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskTopic.MskTopic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.mskTopic.MskTopic.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.mskTopic.MskTopic.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.mskTopic.MskTopic.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.mskTopic.MskTopic.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.mskTopic.MskTopic.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.mskTopic.MskTopic.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.mskTopic.MskTopic.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.mskTopic.MskTopic.putTimeouts"></a>

```go
func PutTimeouts(value MskTopicTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskTopic.MskTopic.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.mskTopic.MskTopicTimeouts">MskTopicTimeouts</a>

---

##### `ResetConfigs` <a name="ResetConfigs" id="@cdktn/provider-aws.mskTopic.MskTopic.resetConfigs"></a>

```go
func ResetConfigs()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.mskTopic.MskTopic.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.mskTopic.MskTopic.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopic.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopic.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopic.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopic.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MskTopic resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.mskTopic.MskTopic.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v23/msktopic"

msktopic.MskTopic_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.mskTopic.MskTopic.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.mskTopic.MskTopic.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v23/msktopic"

msktopic.MskTopic_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.mskTopic.MskTopic.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.mskTopic.MskTopic.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v23/msktopic"

msktopic.MskTopic_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.mskTopic.MskTopic.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.mskTopic.MskTopic.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v23/msktopic"

msktopic.MskTopic_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a MskTopic resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.mskTopic.MskTopic.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.mskTopic.MskTopic.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MskTopic to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.mskTopic.MskTopic.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MskTopic that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/msk_topic#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.mskTopic.MskTopic.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the MskTopic to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopic.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopic.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopic.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopic.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopic.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopic.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopic.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopic.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopic.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopic.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopic.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopic.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopic.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopic.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopic.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopic.property.configsActual">ConfigsActual</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopic.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.mskTopic.MskTopicTimeoutsOutputReference">MskTopicTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopic.property.clusterArnInput">ClusterArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopic.property.configsInput">ConfigsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopic.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopic.property.partitionCountInput">PartitionCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopic.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopic.property.replicationFactorInput">ReplicationFactorInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopic.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopic.property.clusterArn">ClusterArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopic.property.configs">Configs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopic.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopic.property.partitionCount">PartitionCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopic.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopic.property.replicationFactor">ReplicationFactor</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.mskTopic.MskTopic.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.mskTopic.MskTopic.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskTopic.MskTopic.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.mskTopic.MskTopic.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.mskTopic.MskTopic.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.mskTopic.MskTopic.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.mskTopic.MskTopic.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.mskTopic.MskTopic.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.mskTopic.MskTopic.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.mskTopic.MskTopic.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.mskTopic.MskTopic.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.mskTopic.MskTopic.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.mskTopic.MskTopic.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.mskTopic.MskTopic.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.mskTopic.MskTopic.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `ConfigsActual`<sup>Required</sup> <a name="ConfigsActual" id="@cdktn/provider-aws.mskTopic.MskTopic.property.configsActual"></a>

```go
func ConfigsActual() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.mskTopic.MskTopic.property.timeouts"></a>

```go
func Timeouts() MskTopicTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.mskTopic.MskTopicTimeoutsOutputReference">MskTopicTimeoutsOutputReference</a>

---

##### `ClusterArnInput`<sup>Optional</sup> <a name="ClusterArnInput" id="@cdktn/provider-aws.mskTopic.MskTopic.property.clusterArnInput"></a>

```go
func ClusterArnInput() *string
```

- *Type:* *string

---

##### `ConfigsInput`<sup>Optional</sup> <a name="ConfigsInput" id="@cdktn/provider-aws.mskTopic.MskTopic.property.configsInput"></a>

```go
func ConfigsInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.mskTopic.MskTopic.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PartitionCountInput`<sup>Optional</sup> <a name="PartitionCountInput" id="@cdktn/provider-aws.mskTopic.MskTopic.property.partitionCountInput"></a>

```go
func PartitionCountInput() *f64
```

- *Type:* *f64

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.mskTopic.MskTopic.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ReplicationFactorInput`<sup>Optional</sup> <a name="ReplicationFactorInput" id="@cdktn/provider-aws.mskTopic.MskTopic.property.replicationFactorInput"></a>

```go
func ReplicationFactorInput() *f64
```

- *Type:* *f64

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.mskTopic.MskTopic.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ClusterArn`<sup>Required</sup> <a name="ClusterArn" id="@cdktn/provider-aws.mskTopic.MskTopic.property.clusterArn"></a>

```go
func ClusterArn() *string
```

- *Type:* *string

---

##### `Configs`<sup>Required</sup> <a name="Configs" id="@cdktn/provider-aws.mskTopic.MskTopic.property.configs"></a>

```go
func Configs() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.mskTopic.MskTopic.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PartitionCount`<sup>Required</sup> <a name="PartitionCount" id="@cdktn/provider-aws.mskTopic.MskTopic.property.partitionCount"></a>

```go
func PartitionCount() *f64
```

- *Type:* *f64

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.mskTopic.MskTopic.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `ReplicationFactor`<sup>Required</sup> <a name="ReplicationFactor" id="@cdktn/provider-aws.mskTopic.MskTopic.property.replicationFactor"></a>

```go
func ReplicationFactor() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopic.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.mskTopic.MskTopic.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MskTopicConfig <a name="MskTopicConfig" id="@cdktn/provider-aws.mskTopic.MskTopicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskTopic.MskTopicConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v23/msktopic"

&msktopic.MskTopicConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ClusterArn: *string,
	Name: *string,
	PartitionCount: *f64,
	ReplicationFactor: *f64,
	Configs: *string,
	Region: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-aws-go/aws/v23.mskTopic.MskTopicTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopicConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopicConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopicConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopicConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopicConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopicConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopicConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopicConfig.property.clusterArn">ClusterArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/msk_topic#cluster_arn MskTopic#cluster_arn}. |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopicConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/msk_topic#name MskTopic#name}. |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopicConfig.property.partitionCount">PartitionCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/msk_topic#partition_count MskTopic#partition_count}. |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopicConfig.property.replicationFactor">ReplicationFactor</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/msk_topic#replication_factor MskTopic#replication_factor}. |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopicConfig.property.configs">Configs</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/msk_topic#configs MskTopic#configs}. |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopicConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopicConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.mskTopic.MskTopicTimeouts">MskTopicTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.mskTopic.MskTopicConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.mskTopic.MskTopicConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.mskTopic.MskTopicConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.mskTopic.MskTopicConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.mskTopic.MskTopicConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.mskTopic.MskTopicConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.mskTopic.MskTopicConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterArn`<sup>Required</sup> <a name="ClusterArn" id="@cdktn/provider-aws.mskTopic.MskTopicConfig.property.clusterArn"></a>

```go
ClusterArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/msk_topic#cluster_arn MskTopic#cluster_arn}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.mskTopic.MskTopicConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/msk_topic#name MskTopic#name}.

---

##### `PartitionCount`<sup>Required</sup> <a name="PartitionCount" id="@cdktn/provider-aws.mskTopic.MskTopicConfig.property.partitionCount"></a>

```go
PartitionCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/msk_topic#partition_count MskTopic#partition_count}.

---

##### `ReplicationFactor`<sup>Required</sup> <a name="ReplicationFactor" id="@cdktn/provider-aws.mskTopic.MskTopicConfig.property.replicationFactor"></a>

```go
ReplicationFactor *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/msk_topic#replication_factor MskTopic#replication_factor}.

---

##### `Configs`<sup>Optional</sup> <a name="Configs" id="@cdktn/provider-aws.mskTopic.MskTopicConfig.property.configs"></a>

```go
Configs *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/msk_topic#configs MskTopic#configs}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.mskTopic.MskTopicConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/msk_topic#region MskTopic#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.mskTopic.MskTopicConfig.property.timeouts"></a>

```go
Timeouts MskTopicTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.mskTopic.MskTopicTimeouts">MskTopicTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/msk_topic#timeouts MskTopic#timeouts}

---

### MskTopicTimeouts <a name="MskTopicTimeouts" id="@cdktn/provider-aws.mskTopic.MskTopicTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskTopic.MskTopicTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v23/msktopic"

&msktopic.MskTopicTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopicTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopicTimeouts.property.delete">Delete</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopicTimeouts.property.update">Update</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.mskTopic.MskTopicTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/msk_topic#create MskTopic#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.mskTopic.MskTopicTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/msk_topic#delete MskTopic#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.mskTopic.MskTopicTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/msk_topic#update MskTopic#update}

---

## Classes <a name="Classes" id="Classes"></a>

### MskTopicTimeoutsOutputReference <a name="MskTopicTimeoutsOutputReference" id="@cdktn/provider-aws.mskTopic.MskTopicTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskTopic.MskTopicTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v23/msktopic"

msktopic.NewMskTopicTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MskTopicTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopicTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopicTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskTopic.MskTopicTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskTopic.MskTopicTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopicTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopicTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopicTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopicTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopicTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopicTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopicTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopicTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopicTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopicTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopicTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopicTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopicTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopicTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopicTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopicTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskTopic.MskTopicTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.mskTopic.MskTopicTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskTopic.MskTopicTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.mskTopic.MskTopicTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskTopic.MskTopicTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.mskTopic.MskTopicTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskTopic.MskTopicTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.mskTopic.MskTopicTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskTopic.MskTopicTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.mskTopic.MskTopicTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskTopic.MskTopicTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.mskTopic.MskTopicTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskTopic.MskTopicTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.mskTopic.MskTopicTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskTopic.MskTopicTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.mskTopic.MskTopicTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskTopic.MskTopicTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.mskTopic.MskTopicTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskTopic.MskTopicTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.mskTopic.MskTopicTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskTopic.MskTopicTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskTopic.MskTopicTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskTopic.MskTopicTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskTopic.MskTopicTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.mskTopic.MskTopicTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.mskTopic.MskTopicTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.mskTopic.MskTopicTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopicTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopicTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopicTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopicTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopicTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopicTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopicTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopicTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskTopic.MskTopicTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskTopic.MskTopicTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskTopic.MskTopicTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.mskTopic.MskTopicTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.mskTopic.MskTopicTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.mskTopic.MskTopicTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.mskTopic.MskTopicTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.mskTopic.MskTopicTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.mskTopic.MskTopicTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskTopic.MskTopicTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



