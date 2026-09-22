# `dataAwsAccountaccessApplication` Submodule <a name="`dataAwsAccountaccessApplication` Submodule" id="@cdktn/provider-aws.dataAwsAccountaccessApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsAccountaccessApplication <a name="DataAwsAccountaccessApplication" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_application aws_accountaccess_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsaccountaccessapplication"

dataawsaccountaccessapplication.NewDataAwsAccountaccessApplication(scope Construct, id *string, config DataAwsAccountaccessApplicationConfig) DataAwsAccountaccessApplication
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationConfig">DataAwsAccountaccessApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationConfig">DataAwsAccountaccessApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.resetArn">ResetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.resetIdentityCenterInstanceArn">ResetIdentityCenterInstanceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetArn` <a name="ResetArn" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.resetArn"></a>

```go
func ResetArn()
```

##### `ResetIdentityCenterInstanceArn` <a name="ResetIdentityCenterInstanceArn" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.resetIdentityCenterInstanceArn"></a>

```go
func ResetIdentityCenterInstanceArn()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsAccountaccessApplication resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsaccountaccessapplication"

dataawsaccountaccessapplication.DataAwsAccountaccessApplication_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsaccountaccessapplication"

dataawsaccountaccessapplication.DataAwsAccountaccessApplication_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsaccountaccessapplication"

dataawsaccountaccessapplication.DataAwsAccountaccessApplication_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsaccountaccessapplication"

dataawsaccountaccessapplication.DataAwsAccountaccessApplication_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsAccountaccessApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsAccountaccessApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsAccountaccessApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsAccountaccessApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.identitySource">IdentitySource</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList">DataAwsAccountaccessApplicationIdentitySourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.tags">Tags</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.arnInput">ArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.identityCenterInstanceArnInput">IdentityCenterInstanceArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.identityCenterInstanceArn">IdentityCenterInstanceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `IdentitySource`<sup>Required</sup> <a name="IdentitySource" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.identitySource"></a>

```go
func IdentitySource() DataAwsAccountaccessApplicationIdentitySourceList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList">DataAwsAccountaccessApplicationIdentitySourceList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.arnInput"></a>

```go
func ArnInput() *string
```

- *Type:* *string

---

##### `IdentityCenterInstanceArnInput`<sup>Optional</sup> <a name="IdentityCenterInstanceArnInput" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.identityCenterInstanceArnInput"></a>

```go
func IdentityCenterInstanceArnInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `IdentityCenterInstanceArn`<sup>Required</sup> <a name="IdentityCenterInstanceArn" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.identityCenterInstanceArn"></a>

```go
func IdentityCenterInstanceArn() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsAccountaccessApplicationConfig <a name="DataAwsAccountaccessApplicationConfig" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsaccountaccessapplication"

&dataawsaccountaccessapplication.DataAwsAccountaccessApplicationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Arn: *string,
	IdentityCenterInstanceArn: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationConfig.property.arn">Arn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_application#arn DataAwsAccountaccessApplication#arn}. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationConfig.property.identityCenterInstanceArn">IdentityCenterInstanceArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_application#identity_center_instance_arn DataAwsAccountaccessApplication#identity_center_instance_arn}. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Optional</sup> <a name="Arn" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationConfig.property.arn"></a>

```go
Arn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_application#arn DataAwsAccountaccessApplication#arn}.

---

##### `IdentityCenterInstanceArn`<sup>Optional</sup> <a name="IdentityCenterInstanceArn" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationConfig.property.identityCenterInstanceArn"></a>

```go
IdentityCenterInstanceArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_application#identity_center_instance_arn DataAwsAccountaccessApplication#identity_center_instance_arn}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_application#region DataAwsAccountaccessApplication#region}

---

### DataAwsAccountaccessApplicationIdentitySource <a name="DataAwsAccountaccessApplicationIdentitySource" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsaccountaccessapplication"

&dataawsaccountaccessapplication.DataAwsAccountaccessApplicationIdentitySource {

}
```


### DataAwsAccountaccessApplicationIdentitySourceIdentityCenter <a name="DataAwsAccountaccessApplicationIdentitySourceIdentityCenter" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsaccountaccessapplication"

&dataawsaccountaccessapplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenter {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList <a name="DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsaccountaccessapplication"

dataawsaccountaccessapplication.NewDataAwsAccountaccessApplicationIdentitySourceIdentityCenterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList.get"></a>

```go
func Get(index *f64) DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference <a name="DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsaccountaccessapplication"

dataawsaccountaccessapplication.NewDataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.property.applicationArn">ApplicationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.property.instanceArn">InstanceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenter">DataAwsAccountaccessApplicationIdentitySourceIdentityCenter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApplicationArn`<sup>Required</sup> <a name="ApplicationArn" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.property.applicationArn"></a>

```go
func ApplicationArn() *string
```

- *Type:* *string

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.property.instanceArn"></a>

```go
func InstanceArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsAccountaccessApplicationIdentitySourceIdentityCenter
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenter">DataAwsAccountaccessApplicationIdentitySourceIdentityCenter</a>

---


### DataAwsAccountaccessApplicationIdentitySourceList <a name="DataAwsAccountaccessApplicationIdentitySourceList" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsaccountaccessapplication"

dataawsaccountaccessapplication.NewDataAwsAccountaccessApplicationIdentitySourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsAccountaccessApplicationIdentitySourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList.get"></a>

```go
func Get(index *f64) DataAwsAccountaccessApplicationIdentitySourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsAccountaccessApplicationIdentitySourceOutputReference <a name="DataAwsAccountaccessApplicationIdentitySourceOutputReference" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsaccountaccessapplication"

dataawsaccountaccessapplication.NewDataAwsAccountaccessApplicationIdentitySourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsAccountaccessApplicationIdentitySourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.property.identityCenter">IdentityCenter</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList">DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySource">DataAwsAccountaccessApplicationIdentitySource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdentityCenter`<sup>Required</sup> <a name="IdentityCenter" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.property.identityCenter"></a>

```go
func IdentityCenter() DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList">DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsAccountaccessApplicationIdentitySource
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySource">DataAwsAccountaccessApplicationIdentitySource</a>

---



