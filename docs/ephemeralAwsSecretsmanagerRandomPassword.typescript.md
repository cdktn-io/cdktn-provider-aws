# `ephemeralAwsSecretsmanagerRandomPassword` Submodule <a name="`ephemeralAwsSecretsmanagerRandomPassword` Submodule" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralAwsSecretsmanagerRandomPassword <a name="EphemeralAwsSecretsmanagerRandomPassword" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/secretsmanager_random_password aws_secretsmanager_random_password}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.Initializer"></a>

```typescript
import { ephemeralAwsSecretsmanagerRandomPassword } from '@cdktn/provider-aws'

new ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword(scope: Construct, id: string, config?: EphemeralAwsSecretsmanagerRandomPasswordConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPasswordConfig">EphemeralAwsSecretsmanagerRandomPasswordConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPasswordConfig">EphemeralAwsSecretsmanagerRandomPasswordConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.toTerraform">toTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.resetExcludeCharacters">resetExcludeCharacters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.resetExcludeLowercase">resetExcludeLowercase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.resetExcludeNumbers">resetExcludeNumbers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.resetExcludePunctuation">resetExcludePunctuation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.resetExcludeUppercase">resetExcludeUppercase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.resetIncludeSpace">resetIncludeSpace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.resetPasswordLength">resetPasswordLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.resetRequireEachIncludedType">resetRequireEachIncludedType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this ephemeral resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetExcludeCharacters` <a name="resetExcludeCharacters" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.resetExcludeCharacters"></a>

```typescript
public resetExcludeCharacters(): void
```

##### `resetExcludeLowercase` <a name="resetExcludeLowercase" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.resetExcludeLowercase"></a>

```typescript
public resetExcludeLowercase(): void
```

##### `resetExcludeNumbers` <a name="resetExcludeNumbers" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.resetExcludeNumbers"></a>

```typescript
public resetExcludeNumbers(): void
```

##### `resetExcludePunctuation` <a name="resetExcludePunctuation" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.resetExcludePunctuation"></a>

```typescript
public resetExcludePunctuation(): void
```

##### `resetExcludeUppercase` <a name="resetExcludeUppercase" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.resetExcludeUppercase"></a>

```typescript
public resetExcludeUppercase(): void
```

##### `resetIncludeSpace` <a name="resetIncludeSpace" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.resetIncludeSpace"></a>

```typescript
public resetIncludeSpace(): void
```

##### `resetPasswordLength` <a name="resetPasswordLength" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.resetPasswordLength"></a>

```typescript
public resetPasswordLength(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRequireEachIncludedType` <a name="resetRequireEachIncludedType" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.resetRequireEachIncludedType"></a>

```typescript
public resetRequireEachIncludedType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.isTerraformEphemeralResource">isTerraformEphemeralResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.isConstruct"></a>

```typescript
import { ephemeralAwsSecretsmanagerRandomPassword } from '@cdktn/provider-aws'

ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.isTerraformElement"></a>

```typescript
import { ephemeralAwsSecretsmanagerRandomPassword } from '@cdktn/provider-aws'

ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformEphemeralResource` <a name="isTerraformEphemeralResource" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.isTerraformEphemeralResource"></a>

```typescript
import { ephemeralAwsSecretsmanagerRandomPassword } from '@cdktn/provider-aws'

ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.isTerraformEphemeralResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.property.randomPassword">randomPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.property.excludeCharactersInput">excludeCharactersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.property.excludeLowercaseInput">excludeLowercaseInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.property.excludeNumbersInput">excludeNumbersInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.property.excludePunctuationInput">excludePunctuationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.property.excludeUppercaseInput">excludeUppercaseInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.property.includeSpaceInput">includeSpaceInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.property.passwordLengthInput">passwordLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.property.requireEachIncludedTypeInput">requireEachIncludedTypeInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.property.excludeCharacters">excludeCharacters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.property.excludeLowercase">excludeLowercase</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.property.excludeNumbers">excludeNumbers</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.property.excludePunctuation">excludePunctuation</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.property.excludeUppercase">excludeUppercase</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.property.includeSpace">includeSpace</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.property.passwordLength">passwordLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.property.requireEachIncludedType">requireEachIncludedType</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `randomPassword`<sup>Required</sup> <a name="randomPassword" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.property.randomPassword"></a>

```typescript
public readonly randomPassword: string;
```

- *Type:* string

---

##### `excludeCharactersInput`<sup>Optional</sup> <a name="excludeCharactersInput" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.property.excludeCharactersInput"></a>

```typescript
public readonly excludeCharactersInput: string;
```

- *Type:* string

---

##### `excludeLowercaseInput`<sup>Optional</sup> <a name="excludeLowercaseInput" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.property.excludeLowercaseInput"></a>

```typescript
public readonly excludeLowercaseInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `excludeNumbersInput`<sup>Optional</sup> <a name="excludeNumbersInput" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.property.excludeNumbersInput"></a>

```typescript
public readonly excludeNumbersInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `excludePunctuationInput`<sup>Optional</sup> <a name="excludePunctuationInput" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.property.excludePunctuationInput"></a>

```typescript
public readonly excludePunctuationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `excludeUppercaseInput`<sup>Optional</sup> <a name="excludeUppercaseInput" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.property.excludeUppercaseInput"></a>

```typescript
public readonly excludeUppercaseInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `includeSpaceInput`<sup>Optional</sup> <a name="includeSpaceInput" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.property.includeSpaceInput"></a>

```typescript
public readonly includeSpaceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `passwordLengthInput`<sup>Optional</sup> <a name="passwordLengthInput" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.property.passwordLengthInput"></a>

```typescript
public readonly passwordLengthInput: number;
```

- *Type:* number

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `requireEachIncludedTypeInput`<sup>Optional</sup> <a name="requireEachIncludedTypeInput" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.property.requireEachIncludedTypeInput"></a>

```typescript
public readonly requireEachIncludedTypeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `excludeCharacters`<sup>Required</sup> <a name="excludeCharacters" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.property.excludeCharacters"></a>

```typescript
public readonly excludeCharacters: string;
```

- *Type:* string

---

##### `excludeLowercase`<sup>Required</sup> <a name="excludeLowercase" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.property.excludeLowercase"></a>

```typescript
public readonly excludeLowercase: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `excludeNumbers`<sup>Required</sup> <a name="excludeNumbers" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.property.excludeNumbers"></a>

```typescript
public readonly excludeNumbers: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `excludePunctuation`<sup>Required</sup> <a name="excludePunctuation" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.property.excludePunctuation"></a>

```typescript
public readonly excludePunctuation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `excludeUppercase`<sup>Required</sup> <a name="excludeUppercase" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.property.excludeUppercase"></a>

```typescript
public readonly excludeUppercase: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `includeSpace`<sup>Required</sup> <a name="includeSpace" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.property.includeSpace"></a>

```typescript
public readonly includeSpace: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `passwordLength`<sup>Required</sup> <a name="passwordLength" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.property.passwordLength"></a>

```typescript
public readonly passwordLength: number;
```

- *Type:* number

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `requireEachIncludedType`<sup>Required</sup> <a name="requireEachIncludedType" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.property.requireEachIncludedType"></a>

```typescript
public readonly requireEachIncludedType: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPassword.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralAwsSecretsmanagerRandomPasswordConfig <a name="EphemeralAwsSecretsmanagerRandomPasswordConfig" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPasswordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPasswordConfig.Initializer"></a>

```typescript
import { ephemeralAwsSecretsmanagerRandomPassword } from '@cdktn/provider-aws'

const ephemeralAwsSecretsmanagerRandomPasswordConfig: ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPasswordConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPasswordConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPasswordConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPasswordConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPasswordConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPasswordConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPasswordConfig.property.excludeCharacters">excludeCharacters</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/secretsmanager_random_password#exclude_characters EphemeralAwsSecretsmanagerRandomPassword#exclude_characters}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPasswordConfig.property.excludeLowercase">excludeLowercase</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/secretsmanager_random_password#exclude_lowercase EphemeralAwsSecretsmanagerRandomPassword#exclude_lowercase}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPasswordConfig.property.excludeNumbers">excludeNumbers</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/secretsmanager_random_password#exclude_numbers EphemeralAwsSecretsmanagerRandomPassword#exclude_numbers}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPasswordConfig.property.excludePunctuation">excludePunctuation</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/secretsmanager_random_password#exclude_punctuation EphemeralAwsSecretsmanagerRandomPassword#exclude_punctuation}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPasswordConfig.property.excludeUppercase">excludeUppercase</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/secretsmanager_random_password#exclude_uppercase EphemeralAwsSecretsmanagerRandomPassword#exclude_uppercase}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPasswordConfig.property.includeSpace">includeSpace</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/secretsmanager_random_password#include_space EphemeralAwsSecretsmanagerRandomPassword#include_space}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPasswordConfig.property.passwordLength">passwordLength</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/secretsmanager_random_password#password_length EphemeralAwsSecretsmanagerRandomPassword#password_length}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPasswordConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPasswordConfig.property.requireEachIncludedType">requireEachIncludedType</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/secretsmanager_random_password#require_each_included_type EphemeralAwsSecretsmanagerRandomPassword#require_each_included_type}. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPasswordConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPasswordConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPasswordConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPasswordConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPasswordConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `excludeCharacters`<sup>Optional</sup> <a name="excludeCharacters" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPasswordConfig.property.excludeCharacters"></a>

```typescript
public readonly excludeCharacters: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/secretsmanager_random_password#exclude_characters EphemeralAwsSecretsmanagerRandomPassword#exclude_characters}.

---

##### `excludeLowercase`<sup>Optional</sup> <a name="excludeLowercase" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPasswordConfig.property.excludeLowercase"></a>

```typescript
public readonly excludeLowercase: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/secretsmanager_random_password#exclude_lowercase EphemeralAwsSecretsmanagerRandomPassword#exclude_lowercase}.

---

##### `excludeNumbers`<sup>Optional</sup> <a name="excludeNumbers" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPasswordConfig.property.excludeNumbers"></a>

```typescript
public readonly excludeNumbers: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/secretsmanager_random_password#exclude_numbers EphemeralAwsSecretsmanagerRandomPassword#exclude_numbers}.

---

##### `excludePunctuation`<sup>Optional</sup> <a name="excludePunctuation" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPasswordConfig.property.excludePunctuation"></a>

```typescript
public readonly excludePunctuation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/secretsmanager_random_password#exclude_punctuation EphemeralAwsSecretsmanagerRandomPassword#exclude_punctuation}.

---

##### `excludeUppercase`<sup>Optional</sup> <a name="excludeUppercase" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPasswordConfig.property.excludeUppercase"></a>

```typescript
public readonly excludeUppercase: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/secretsmanager_random_password#exclude_uppercase EphemeralAwsSecretsmanagerRandomPassword#exclude_uppercase}.

---

##### `includeSpace`<sup>Optional</sup> <a name="includeSpace" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPasswordConfig.property.includeSpace"></a>

```typescript
public readonly includeSpace: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/secretsmanager_random_password#include_space EphemeralAwsSecretsmanagerRandomPassword#include_space}.

---

##### `passwordLength`<sup>Optional</sup> <a name="passwordLength" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPasswordConfig.property.passwordLength"></a>

```typescript
public readonly passwordLength: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/secretsmanager_random_password#password_length EphemeralAwsSecretsmanagerRandomPassword#password_length}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPasswordConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/secretsmanager_random_password#region EphemeralAwsSecretsmanagerRandomPassword#region}

---

##### `requireEachIncludedType`<sup>Optional</sup> <a name="requireEachIncludedType" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerRandomPassword.EphemeralAwsSecretsmanagerRandomPasswordConfig.property.requireEachIncludedType"></a>

```typescript
public readonly requireEachIncludedType: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/secretsmanager_random_password#require_each_included_type EphemeralAwsSecretsmanagerRandomPassword#require_each_included_type}.

---



