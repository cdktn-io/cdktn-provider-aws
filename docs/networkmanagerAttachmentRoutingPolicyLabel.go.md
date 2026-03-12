# `networkmanagerAttachmentRoutingPolicyLabel` Submodule <a name="`networkmanagerAttachmentRoutingPolicyLabel` Submodule" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkmanagerAttachmentRoutingPolicyLabel <a name="NetworkmanagerAttachmentRoutingPolicyLabel" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/networkmanager_attachment_routing_policy_label aws_networkmanager_attachment_routing_policy_label}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v23/networkmanagerattachmentroutingpolicylabel"

networkmanagerattachmentroutingpolicylabel.NewNetworkmanagerAttachmentRoutingPolicyLabel(scope Construct, id *string, config NetworkmanagerAttachmentRoutingPolicyLabelConfig) NetworkmanagerAttachmentRoutingPolicyLabel
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabelConfig">NetworkmanagerAttachmentRoutingPolicyLabelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabelConfig">NetworkmanagerAttachmentRoutingPolicyLabelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkmanagerAttachmentRoutingPolicyLabel resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v23/networkmanagerattachmentroutingpolicylabel"

networkmanagerattachmentroutingpolicylabel.NetworkmanagerAttachmentRoutingPolicyLabel_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v23/networkmanagerattachmentroutingpolicylabel"

networkmanagerattachmentroutingpolicylabel.NetworkmanagerAttachmentRoutingPolicyLabel_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v23/networkmanagerattachmentroutingpolicylabel"

networkmanagerattachmentroutingpolicylabel.NetworkmanagerAttachmentRoutingPolicyLabel_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v23/networkmanagerattachmentroutingpolicylabel"

networkmanagerattachmentroutingpolicylabel.NetworkmanagerAttachmentRoutingPolicyLabel_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a NetworkmanagerAttachmentRoutingPolicyLabel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NetworkmanagerAttachmentRoutingPolicyLabel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NetworkmanagerAttachmentRoutingPolicyLabel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/networkmanager_attachment_routing_policy_label#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the NetworkmanagerAttachmentRoutingPolicyLabel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.attachmentIdInput">AttachmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.coreNetworkIdInput">CoreNetworkIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.routingPolicyLabelInput">RoutingPolicyLabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.attachmentId">AttachmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.coreNetworkId">CoreNetworkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.routingPolicyLabel">RoutingPolicyLabel</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AttachmentIdInput`<sup>Optional</sup> <a name="AttachmentIdInput" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.attachmentIdInput"></a>

```go
func AttachmentIdInput() *string
```

- *Type:* *string

---

##### `CoreNetworkIdInput`<sup>Optional</sup> <a name="CoreNetworkIdInput" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.coreNetworkIdInput"></a>

```go
func CoreNetworkIdInput() *string
```

- *Type:* *string

---

##### `RoutingPolicyLabelInput`<sup>Optional</sup> <a name="RoutingPolicyLabelInput" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.routingPolicyLabelInput"></a>

```go
func RoutingPolicyLabelInput() *string
```

- *Type:* *string

---

##### `AttachmentId`<sup>Required</sup> <a name="AttachmentId" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.attachmentId"></a>

```go
func AttachmentId() *string
```

- *Type:* *string

---

##### `CoreNetworkId`<sup>Required</sup> <a name="CoreNetworkId" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.coreNetworkId"></a>

```go
func CoreNetworkId() *string
```

- *Type:* *string

---

##### `RoutingPolicyLabel`<sup>Required</sup> <a name="RoutingPolicyLabel" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.routingPolicyLabel"></a>

```go
func RoutingPolicyLabel() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkmanagerAttachmentRoutingPolicyLabelConfig <a name="NetworkmanagerAttachmentRoutingPolicyLabelConfig" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabelConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v23/networkmanagerattachmentroutingpolicylabel"

&networkmanagerattachmentroutingpolicylabel.NetworkmanagerAttachmentRoutingPolicyLabelConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AttachmentId: *string,
	CoreNetworkId: *string,
	RoutingPolicyLabel: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabelConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabelConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabelConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabelConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabelConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabelConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabelConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabelConfig.property.attachmentId">AttachmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/networkmanager_attachment_routing_policy_label#attachment_id NetworkmanagerAttachmentRoutingPolicyLabel#attachment_id}. |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabelConfig.property.coreNetworkId">CoreNetworkId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/networkmanager_attachment_routing_policy_label#core_network_id NetworkmanagerAttachmentRoutingPolicyLabel#core_network_id}. |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabelConfig.property.routingPolicyLabel">RoutingPolicyLabel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/networkmanager_attachment_routing_policy_label#routing_policy_label NetworkmanagerAttachmentRoutingPolicyLabel#routing_policy_label}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabelConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabelConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabelConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabelConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabelConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabelConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabelConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AttachmentId`<sup>Required</sup> <a name="AttachmentId" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabelConfig.property.attachmentId"></a>

```go
AttachmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/networkmanager_attachment_routing_policy_label#attachment_id NetworkmanagerAttachmentRoutingPolicyLabel#attachment_id}.

---

##### `CoreNetworkId`<sup>Required</sup> <a name="CoreNetworkId" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabelConfig.property.coreNetworkId"></a>

```go
CoreNetworkId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/networkmanager_attachment_routing_policy_label#core_network_id NetworkmanagerAttachmentRoutingPolicyLabel#core_network_id}.

---

##### `RoutingPolicyLabel`<sup>Required</sup> <a name="RoutingPolicyLabel" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabelConfig.property.routingPolicyLabel"></a>

```go
RoutingPolicyLabel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/networkmanager_attachment_routing_policy_label#routing_policy_label NetworkmanagerAttachmentRoutingPolicyLabel#routing_policy_label}.

---



