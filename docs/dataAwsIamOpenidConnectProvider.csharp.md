# `dataAwsIamOpenidConnectProvider` Submodule <a name="`dataAwsIamOpenidConnectProvider` Submodule" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsIamOpenidConnectProvider <a name="DataAwsIamOpenidConnectProvider" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/iam_openid_connect_provider aws_iam_openid_connect_provider}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsIamOpenidConnectProvider(Construct Scope, string Id, DataAwsIamOpenidConnectProviderConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig">DataAwsIamOpenidConnectProviderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig">DataAwsIamOpenidConnectProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.resetArn">ResetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.resetUrl">ResetUrl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetArn` <a name="ResetArn" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.resetArn"></a>

```csharp
private void ResetArn()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.resetUrl"></a>

```csharp
private void ResetUrl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsIamOpenidConnectProvider resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsIamOpenidConnectProvider.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsIamOpenidConnectProvider.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsIamOpenidConnectProvider.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsIamOpenidConnectProvider.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsIamOpenidConnectProvider resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsIamOpenidConnectProvider to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsIamOpenidConnectProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/iam_openid_connect_provider#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsIamOpenidConnectProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.clientIdList">ClientIdList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.thumbprintList">ThumbprintList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.arnInput">ArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.url">Url</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `ClientIdList`<sup>Required</sup> <a name="ClientIdList" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.clientIdList"></a>

```csharp
public string[] ClientIdList { get; }
```

- *Type:* string[]

---

##### `ThumbprintList`<sup>Required</sup> <a name="ThumbprintList" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.thumbprintList"></a>

```csharp
public string[] ThumbprintList { get; }
```

- *Type:* string[]

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.arnInput"></a>

```csharp
public string ArnInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProvider.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsIamOpenidConnectProviderConfig <a name="DataAwsIamOpenidConnectProviderConfig" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsIamOpenidConnectProviderConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Arn = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    string Url = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig.property.arn">Arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/iam_openid_connect_provider#arn DataAwsIamOpenidConnectProvider#arn}. |
| <code><a href="#@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/iam_openid_connect_provider#id DataAwsIamOpenidConnectProvider#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/iam_openid_connect_provider#tags DataAwsIamOpenidConnectProvider#tags}. |
| <code><a href="#@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig.property.url">Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/iam_openid_connect_provider#url DataAwsIamOpenidConnectProvider#url}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Optional</sup> <a name="Arn" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig.property.arn"></a>

```csharp
public string Arn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/iam_openid_connect_provider#arn DataAwsIamOpenidConnectProvider#arn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/iam_openid_connect_provider#id DataAwsIamOpenidConnectProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/iam_openid_connect_provider#tags DataAwsIamOpenidConnectProvider#tags}.

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktn/provider-aws.dataAwsIamOpenidConnectProvider.DataAwsIamOpenidConnectProviderConfig.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/iam_openid_connect_provider#url DataAwsIamOpenidConnectProvider#url}.

---



