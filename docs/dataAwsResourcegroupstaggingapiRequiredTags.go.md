# `dataAwsResourcegroupstaggingapiRequiredTags` Submodule <a name="`dataAwsResourcegroupstaggingapiRequiredTags` Submodule" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsResourcegroupstaggingapiRequiredTags <a name="DataAwsResourcegroupstaggingapiRequiredTags" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/resourcegroupstaggingapi_required_tags aws_resourcegroupstaggingapi_required_tags}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawsresourcegroupstaggingapirequiredtags"

dataawsresourcegroupstaggingapirequiredtags.NewDataAwsResourcegroupstaggingapiRequiredTags(scope Construct, id *string, config DataAwsResourcegroupstaggingapiRequiredTagsConfig) DataAwsResourcegroupstaggingapiRequiredTags
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig">DataAwsResourcegroupstaggingapiRequiredTagsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig">DataAwsResourcegroupstaggingapiRequiredTagsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsResourcegroupstaggingapiRequiredTags resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawsresourcegroupstaggingapirequiredtags"

dataawsresourcegroupstaggingapirequiredtags.DataAwsResourcegroupstaggingapiRequiredTags_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawsresourcegroupstaggingapirequiredtags"

dataawsresourcegroupstaggingapirequiredtags.DataAwsResourcegroupstaggingapiRequiredTags_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawsresourcegroupstaggingapirequiredtags"

dataawsresourcegroupstaggingapirequiredtags.DataAwsResourcegroupstaggingapiRequiredTags_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawsresourcegroupstaggingapirequiredtags"

dataawsresourcegroupstaggingapirequiredtags.DataAwsResourcegroupstaggingapiRequiredTags_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAwsResourcegroupstaggingapiRequiredTags resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsResourcegroupstaggingapiRequiredTags to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsResourcegroupstaggingapiRequiredTags that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/resourcegroupstaggingapi_required_tags#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsResourcegroupstaggingapiRequiredTags to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.requiredTags">RequiredTags</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList">DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `RequiredTags`<sup>Required</sup> <a name="RequiredTags" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.requiredTags"></a>

```go
func RequiredTags() DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList">DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsResourcegroupstaggingapiRequiredTagsConfig <a name="DataAwsResourcegroupstaggingapiRequiredTagsConfig" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawsresourcegroupstaggingapirequiredtags"

&dataawsresourcegroupstaggingapirequiredtags.DataAwsResourcegroupstaggingapiRequiredTagsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/resourcegroupstaggingapi_required_tags#region DataAwsResourcegroupstaggingapiRequiredTags#region}

---

### DataAwsResourcegroupstaggingapiRequiredTagsRequiredTags <a name="DataAwsResourcegroupstaggingapiRequiredTagsRequiredTags" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawsresourcegroupstaggingapirequiredtags"

&dataawsresourcegroupstaggingapirequiredtags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList <a name="DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawsresourcegroupstaggingapirequiredtags"

dataawsresourcegroupstaggingapirequiredtags.NewDataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.get"></a>

```go
func Get(index *f64) DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference <a name="DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawsresourcegroupstaggingapirequiredtags"

dataawsresourcegroupstaggingapirequiredtags.NewDataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.property.cloudFormationResourceTypes">CloudFormationResourceTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.property.reportingTagKeys">ReportingTagKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTags">DataAwsResourcegroupstaggingapiRequiredTagsRequiredTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudFormationResourceTypes`<sup>Required</sup> <a name="CloudFormationResourceTypes" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.property.cloudFormationResourceTypes"></a>

```go
func CloudFormationResourceTypes() *[]*string
```

- *Type:* *[]*string

---

##### `ReportingTagKeys`<sup>Required</sup> <a name="ReportingTagKeys" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.property.reportingTagKeys"></a>

```go
func ReportingTagKeys() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsResourcegroupstaggingapiRequiredTagsRequiredTags
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTags">DataAwsResourcegroupstaggingapiRequiredTagsRequiredTags</a>

---



