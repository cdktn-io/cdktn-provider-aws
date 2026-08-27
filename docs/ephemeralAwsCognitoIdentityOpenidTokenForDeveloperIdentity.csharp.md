# `ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity` Submodule <a name="`ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity` Submodule" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity <a name="EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/cognito_identity_openid_token_for_developer_identity aws_cognito_identity_openid_token_for_developer_identity}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity(Construct Scope, string Id, EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig">EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig">EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.toTerraform">ToTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.resetIdentityId">ResetIdentityId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.resetPrincipalTags">ResetPrincipalTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.resetTokenDuration">ResetTokenDuration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this ephemeral resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetIdentityId` <a name="ResetIdentityId" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.resetIdentityId"></a>

```csharp
private void ResetIdentityId()
```

##### `ResetPrincipalTags` <a name="ResetPrincipalTags" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.resetPrincipalTags"></a>

```csharp
private void ResetPrincipalTags()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTokenDuration` <a name="ResetTokenDuration" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.resetTokenDuration"></a>

```csharp
private void ResetTokenDuration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.isTerraformEphemeralResource">IsTerraformEphemeralResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformEphemeralResource` <a name="IsTerraformEphemeralResource" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.isTerraformEphemeralResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.IsTerraformEphemeralResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.token">Token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.identityIdInput">IdentityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.identityPoolIdInput">IdentityPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.loginsInput">LoginsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.principalTagsInput">PrincipalTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.tokenDurationInput">TokenDurationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.identityId">IdentityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.identityPoolId">IdentityPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.logins">Logins</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.principalTags">PrincipalTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.tokenDuration">TokenDuration</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.lifecycle"></a>

```csharp
public TerraformEphemeralResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.token"></a>

```csharp
public string Token { get; }
```

- *Type:* string

---

##### `IdentityIdInput`<sup>Optional</sup> <a name="IdentityIdInput" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.identityIdInput"></a>

```csharp
public string IdentityIdInput { get; }
```

- *Type:* string

---

##### `IdentityPoolIdInput`<sup>Optional</sup> <a name="IdentityPoolIdInput" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.identityPoolIdInput"></a>

```csharp
public string IdentityPoolIdInput { get; }
```

- *Type:* string

---

##### `LoginsInput`<sup>Optional</sup> <a name="LoginsInput" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.loginsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LoginsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PrincipalTagsInput`<sup>Optional</sup> <a name="PrincipalTagsInput" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.principalTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PrincipalTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TokenDurationInput`<sup>Optional</sup> <a name="TokenDurationInput" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.tokenDurationInput"></a>

```csharp
public double TokenDurationInput { get; }
```

- *Type:* double

---

##### `IdentityId`<sup>Required</sup> <a name="IdentityId" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.identityId"></a>

```csharp
public string IdentityId { get; }
```

- *Type:* string

---

##### `IdentityPoolId`<sup>Required</sup> <a name="IdentityPoolId" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.identityPoolId"></a>

```csharp
public string IdentityPoolId { get; }
```

- *Type:* string

---

##### `Logins`<sup>Required</sup> <a name="Logins" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.logins"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Logins { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PrincipalTags`<sup>Required</sup> <a name="PrincipalTags" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.principalTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PrincipalTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `TokenDuration`<sup>Required</sup> <a name="TokenDuration" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.tokenDuration"></a>

```csharp
public double TokenDuration { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig <a name="EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig {
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformEphemeralResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    string IdentityPoolId,
    System.Collections.Generic.IDictionary<string, string> Logins,
    string IdentityId = null,
    System.Collections.Generic.IDictionary<string, string> PrincipalTags = null,
    string Region = null,
    double TokenDuration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.identityPoolId">IdentityPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/cognito_identity_openid_token_for_developer_identity#identity_pool_id EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity#identity_pool_id}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.logins">Logins</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/cognito_identity_openid_token_for_developer_identity#logins EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity#logins}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.identityId">IdentityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/cognito_identity_openid_token_for_developer_identity#identity_id EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity#identity_id}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.principalTags">PrincipalTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/cognito_identity_openid_token_for_developer_identity#principal_tags EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity#principal_tags}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.tokenDuration">TokenDuration</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/cognito_identity_openid_token_for_developer_identity#token_duration EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity#token_duration}. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.lifecycle"></a>

```csharp
public TerraformEphemeralResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `IdentityPoolId`<sup>Required</sup> <a name="IdentityPoolId" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.identityPoolId"></a>

```csharp
public string IdentityPoolId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/cognito_identity_openid_token_for_developer_identity#identity_pool_id EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity#identity_pool_id}.

---

##### `Logins`<sup>Required</sup> <a name="Logins" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.logins"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Logins { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/cognito_identity_openid_token_for_developer_identity#logins EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity#logins}.

---

##### `IdentityId`<sup>Optional</sup> <a name="IdentityId" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.identityId"></a>

```csharp
public string IdentityId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/cognito_identity_openid_token_for_developer_identity#identity_id EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity#identity_id}.

---

##### `PrincipalTags`<sup>Optional</sup> <a name="PrincipalTags" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.principalTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PrincipalTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/cognito_identity_openid_token_for_developer_identity#principal_tags EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity#principal_tags}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/cognito_identity_openid_token_for_developer_identity#region EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity#region}

---

##### `TokenDuration`<sup>Optional</sup> <a name="TokenDuration" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.tokenDuration"></a>

```csharp
public double TokenDuration { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/cognito_identity_openid_token_for_developer_identity#token_duration EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity#token_duration}.

---



