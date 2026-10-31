# `cloudwatchomniOrganizationDomain` Submodule <a name="`cloudwatchomniOrganizationDomain` Submodule" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchomniOrganizationDomain <a name="CloudwatchomniOrganizationDomain" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_organization_domain aws_cloudwatchomni_organization_domain}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/cloudwatchomniorganizationdomain"

cloudwatchomniorganizationdomain.NewCloudwatchomniOrganizationDomain(scope Construct, id *string, config CloudwatchomniOrganizationDomainConfig) CloudwatchomniOrganizationDomain
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig">CloudwatchomniOrganizationDomainConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig">CloudwatchomniOrganizationDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.putIdentityProviderConfiguration">PutIdentityProviderConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.resetIdentityProviderConfiguration">ResetIdentityProviderConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIdentityProviderConfiguration` <a name="PutIdentityProviderConfiguration" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.putIdentityProviderConfiguration"></a>

```go
func PutIdentityProviderConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.putIdentityProviderConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetIdentityProviderConfiguration` <a name="ResetIdentityProviderConfiguration" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.resetIdentityProviderConfiguration"></a>

```go
func ResetIdentityProviderConfiguration()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CloudwatchomniOrganizationDomain resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/cloudwatchomniorganizationdomain"

cloudwatchomniorganizationdomain.CloudwatchomniOrganizationDomain_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/cloudwatchomniorganizationdomain"

cloudwatchomniorganizationdomain.CloudwatchomniOrganizationDomain_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/cloudwatchomniorganizationdomain"

cloudwatchomniorganizationdomain.CloudwatchomniOrganizationDomain_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/cloudwatchomniorganizationdomain"

cloudwatchomniorganizationdomain.CloudwatchomniOrganizationDomain_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a CloudwatchomniOrganizationDomain resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CloudwatchomniOrganizationDomain to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CloudwatchomniOrganizationDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_organization_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the CloudwatchomniOrganizationDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.customEndpointUrls">CustomEndpointUrls</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.domainEndpointUrl">DomainEndpointUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.domainId">DomainId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.identityCenterApplicationArn">IdentityCenterApplicationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.identityProviderConfiguration">IdentityProviderConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList">CloudwatchomniOrganizationDomainIdentityProviderConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.organizationId">OrganizationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.ownerAccountId">OwnerAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.tagsAll">TagsAll</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.domainAccessRoleArnInput">DomainAccessRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.identityProviderConfigurationInput">IdentityProviderConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.identityProvidersInput">IdentityProvidersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.domainAccessRoleArn">DomainAccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.identityProviders">IdentityProviders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CustomEndpointUrls`<sup>Required</sup> <a name="CustomEndpointUrls" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.customEndpointUrls"></a>

```go
func CustomEndpointUrls() *[]*string
```

- *Type:* *[]*string

---

##### `DomainEndpointUrl`<sup>Required</sup> <a name="DomainEndpointUrl" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.domainEndpointUrl"></a>

```go
func DomainEndpointUrl() *string
```

- *Type:* *string

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.domainId"></a>

```go
func DomainId() *string
```

- *Type:* *string

---

##### `IdentityCenterApplicationArn`<sup>Required</sup> <a name="IdentityCenterApplicationArn" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.identityCenterApplicationArn"></a>

```go
func IdentityCenterApplicationArn() *string
```

- *Type:* *string

---

##### `IdentityProviderConfiguration`<sup>Required</sup> <a name="IdentityProviderConfiguration" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.identityProviderConfiguration"></a>

```go
func IdentityProviderConfiguration() CloudwatchomniOrganizationDomainIdentityProviderConfigurationList
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList">CloudwatchomniOrganizationDomainIdentityProviderConfigurationList</a>

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.organizationId"></a>

```go
func OrganizationId() *string
```

- *Type:* *string

---

##### `OwnerAccountId`<sup>Required</sup> <a name="OwnerAccountId" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.ownerAccountId"></a>

```go
func OwnerAccountId() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.tagsAll"></a>

```go
func TagsAll() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `DomainAccessRoleArnInput`<sup>Optional</sup> <a name="DomainAccessRoleArnInput" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.domainAccessRoleArnInput"></a>

```go
func DomainAccessRoleArnInput() *string
```

- *Type:* *string

---

##### `IdentityProviderConfigurationInput`<sup>Optional</sup> <a name="IdentityProviderConfigurationInput" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.identityProviderConfigurationInput"></a>

```go
func IdentityProviderConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `IdentityProvidersInput`<sup>Optional</sup> <a name="IdentityProvidersInput" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.identityProvidersInput"></a>

```go
func IdentityProvidersInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DomainAccessRoleArn`<sup>Required</sup> <a name="DomainAccessRoleArn" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.domainAccessRoleArn"></a>

```go
func DomainAccessRoleArn() *string
```

- *Type:* *string

---

##### `IdentityProviders`<sup>Required</sup> <a name="IdentityProviders" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.identityProviders"></a>

```go
func IdentityProviders() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchomniOrganizationDomainConfig <a name="CloudwatchomniOrganizationDomainConfig" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/cloudwatchomniorganizationdomain"

&cloudwatchomniorganizationdomain.CloudwatchomniOrganizationDomainConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DomainAccessRoleArn: *string,
	IdentityProviders: *[]*string,
	Name: *string,
	IdentityProviderConfiguration: interface{},
	Region: *string,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.domainAccessRoleArn">DomainAccessRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_organization_domain#domain_access_role_arn CloudwatchomniOrganizationDomain#domain_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.identityProviders">IdentityProviders</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_organization_domain#identity_providers CloudwatchomniOrganizationDomain#identity_providers}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_organization_domain#name CloudwatchomniOrganizationDomain#name}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.identityProviderConfiguration">IdentityProviderConfiguration</a></code> | <code>interface{}</code> | identity_provider_configuration block. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_organization_domain#tags CloudwatchomniOrganizationDomain#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DomainAccessRoleArn`<sup>Required</sup> <a name="DomainAccessRoleArn" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.domainAccessRoleArn"></a>

```go
DomainAccessRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_organization_domain#domain_access_role_arn CloudwatchomniOrganizationDomain#domain_access_role_arn}.

---

##### `IdentityProviders`<sup>Required</sup> <a name="IdentityProviders" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.identityProviders"></a>

```go
IdentityProviders *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_organization_domain#identity_providers CloudwatchomniOrganizationDomain#identity_providers}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_organization_domain#name CloudwatchomniOrganizationDomain#name}.

---

##### `IdentityProviderConfiguration`<sup>Optional</sup> <a name="IdentityProviderConfiguration" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.identityProviderConfiguration"></a>

```go
IdentityProviderConfiguration interface{}
```

- *Type:* interface{}

identity_provider_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_organization_domain#identity_provider_configuration CloudwatchomniOrganizationDomain#identity_provider_configuration}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_organization_domain#region CloudwatchomniOrganizationDomain#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_organization_domain#tags CloudwatchomniOrganizationDomain#tags}.

---

### CloudwatchomniOrganizationDomainIdentityProviderConfiguration <a name="CloudwatchomniOrganizationDomainIdentityProviderConfiguration" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/cloudwatchomniorganizationdomain"

&cloudwatchomniorganizationdomain.CloudwatchomniOrganizationDomainIdentityProviderConfiguration {
	IdentityCenterConfiguration: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfiguration.property.identityCenterConfiguration">IdentityCenterConfiguration</a></code> | <code>interface{}</code> | identity_center_configuration block. |

---

##### `IdentityCenterConfiguration`<sup>Optional</sup> <a name="IdentityCenterConfiguration" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfiguration.property.identityCenterConfiguration"></a>

```go
IdentityCenterConfiguration interface{}
```

- *Type:* interface{}

identity_center_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_organization_domain#identity_center_configuration CloudwatchomniOrganizationDomain#identity_center_configuration}

---

### CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration <a name="CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/cloudwatchomniorganizationdomain"

&cloudwatchomniorganizationdomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration {
	IdentityCenterInstanceArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration.property.identityCenterInstanceArn">IdentityCenterInstanceArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_organization_domain#identity_center_instance_arn CloudwatchomniOrganizationDomain#identity_center_instance_arn}. |

---

##### `IdentityCenterInstanceArn`<sup>Required</sup> <a name="IdentityCenterInstanceArn" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration.property.identityCenterInstanceArn"></a>

```go
IdentityCenterInstanceArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_organization_domain#identity_center_instance_arn CloudwatchomniOrganizationDomain#identity_center_instance_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList <a name="CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/cloudwatchomniorganizationdomain"

cloudwatchomniorganizationdomain.NewCloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.get"></a>

```go
func Get(index *f64) CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference <a name="CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/cloudwatchomniorganizationdomain"

cloudwatchomniorganizationdomain.NewCloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.property.identityCenterInstanceArnInput">IdentityCenterInstanceArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.property.identityCenterInstanceArn">IdentityCenterInstanceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdentityCenterInstanceArnInput`<sup>Optional</sup> <a name="IdentityCenterInstanceArnInput" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.property.identityCenterInstanceArnInput"></a>

```go
func IdentityCenterInstanceArnInput() *string
```

- *Type:* *string

---

##### `IdentityCenterInstanceArn`<sup>Required</sup> <a name="IdentityCenterInstanceArn" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.property.identityCenterInstanceArn"></a>

```go
func IdentityCenterInstanceArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchomniOrganizationDomainIdentityProviderConfigurationList <a name="CloudwatchomniOrganizationDomainIdentityProviderConfigurationList" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/cloudwatchomniorganizationdomain"

cloudwatchomniorganizationdomain.NewCloudwatchomniOrganizationDomainIdentityProviderConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudwatchomniOrganizationDomainIdentityProviderConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.get"></a>

```go
func Get(index *f64) CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference <a name="CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/cloudwatchomniorganizationdomain"

cloudwatchomniorganizationdomain.NewCloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.putIdentityCenterConfiguration">PutIdentityCenterConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.resetIdentityCenterConfiguration">ResetIdentityCenterConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIdentityCenterConfiguration` <a name="PutIdentityCenterConfiguration" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.putIdentityCenterConfiguration"></a>

```go
func PutIdentityCenterConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.putIdentityCenterConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetIdentityCenterConfiguration` <a name="ResetIdentityCenterConfiguration" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.resetIdentityCenterConfiguration"></a>

```go
func ResetIdentityCenterConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.property.identityCenterConfiguration">IdentityCenterConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList">CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.property.identityCenterConfigurationInput">IdentityCenterConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdentityCenterConfiguration`<sup>Required</sup> <a name="IdentityCenterConfiguration" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.property.identityCenterConfiguration"></a>

```go
func IdentityCenterConfiguration() CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList">CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList</a>

---

##### `IdentityCenterConfigurationInput`<sup>Optional</sup> <a name="IdentityCenterConfigurationInput" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.property.identityCenterConfigurationInput"></a>

```go
func IdentityCenterConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



