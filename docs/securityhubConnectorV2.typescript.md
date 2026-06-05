# `securityhubConnectorV2` Submodule <a name="`securityhubConnectorV2` Submodule" id="@cdktn/provider-aws.securityhubConnectorV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityhubConnectorV2 <a name="SecurityhubConnectorV2" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/securityhub_connector_v2 aws_securityhub_connector_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer"></a>

```typescript
import { securityhubConnectorV2 } from '@cdktn/provider-aws'

new securityhubConnectorV2.SecurityhubConnectorV2(scope: Construct, id: string, config: SecurityhubConnectorV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config">SecurityhubConnectorV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config">SecurityhubConnectorV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.putConnectorProvider">putConnectorProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.resetConnectorProvider">resetConnectorProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConnectorProvider` <a name="putConnectorProvider" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.putConnectorProvider"></a>

```typescript
public putConnectorProvider(value: IResolvable | SecurityhubConnectorV2ConnectorProvider[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.putConnectorProvider.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProvider">SecurityhubConnectorV2ConnectorProvider</a>[]

---

##### `resetConnectorProvider` <a name="resetConnectorProvider" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.resetConnectorProvider"></a>

```typescript
public resetConnectorProvider(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.resetKmsKeyArn"></a>

```typescript
public resetKmsKeyArn(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SecurityhubConnectorV2 resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.isConstruct"></a>

```typescript
import { securityhubConnectorV2 } from '@cdktn/provider-aws'

securityhubConnectorV2.SecurityhubConnectorV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.isTerraformElement"></a>

```typescript
import { securityhubConnectorV2 } from '@cdktn/provider-aws'

securityhubConnectorV2.SecurityhubConnectorV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.isTerraformResource"></a>

```typescript
import { securityhubConnectorV2 } from '@cdktn/provider-aws'

securityhubConnectorV2.SecurityhubConnectorV2.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.generateConfigForImport"></a>

```typescript
import { securityhubConnectorV2 } from '@cdktn/provider-aws'

securityhubConnectorV2.SecurityhubConnectorV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SecurityhubConnectorV2 resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecurityhubConnectorV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecurityhubConnectorV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/securityhub_connector_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SecurityhubConnectorV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.connectorId">connectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.connectorProvider">connectorProvider</a></code> | <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList">SecurityhubConnectorV2ConnectorProviderList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.health">health</a></code> | <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList">SecurityhubConnectorV2HealthList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.tagsAll">tagsAll</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.connectorProviderInput">connectorProviderInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProvider">SecurityhubConnectorV2ConnectorProvider</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `connectorId`<sup>Required</sup> <a name="connectorId" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.connectorId"></a>

```typescript
public readonly connectorId: string;
```

- *Type:* string

---

##### `connectorProvider`<sup>Required</sup> <a name="connectorProvider" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.connectorProvider"></a>

```typescript
public readonly connectorProvider: SecurityhubConnectorV2ConnectorProviderList;
```

- *Type:* <a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList">SecurityhubConnectorV2ConnectorProviderList</a>

---

##### `health`<sup>Required</sup> <a name="health" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.health"></a>

```typescript
public readonly health: SecurityhubConnectorV2HealthList;
```

- *Type:* <a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList">SecurityhubConnectorV2HealthList</a>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `connectorProviderInput`<sup>Optional</sup> <a name="connectorProviderInput" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.connectorProviderInput"></a>

```typescript
public readonly connectorProviderInput: IResolvable | SecurityhubConnectorV2ConnectorProvider[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProvider">SecurityhubConnectorV2ConnectorProvider</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityhubConnectorV2Config <a name="SecurityhubConnectorV2Config" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.Initializer"></a>

```typescript
import { securityhubConnectorV2 } from '@cdktn/provider-aws'

const securityhubConnectorV2Config: securityhubConnectorV2.SecurityhubConnectorV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/securityhub_connector_v2#name SecurityhubConnectorV2#name}. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.connectorProvider">connectorProvider</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProvider">SecurityhubConnectorV2ConnectorProvider</a>[]</code> | connector_provider block. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/securityhub_connector_v2#description SecurityhubConnectorV2#description}. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/securityhub_connector_v2#kms_key_arn SecurityhubConnectorV2#kms_key_arn}. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/securityhub_connector_v2#tags SecurityhubConnectorV2#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/securityhub_connector_v2#name SecurityhubConnectorV2#name}.

---

##### `connectorProvider`<sup>Optional</sup> <a name="connectorProvider" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.connectorProvider"></a>

```typescript
public readonly connectorProvider: IResolvable | SecurityhubConnectorV2ConnectorProvider[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProvider">SecurityhubConnectorV2ConnectorProvider</a>[]

connector_provider block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/securityhub_connector_v2#connector_provider SecurityhubConnectorV2#connector_provider}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/securityhub_connector_v2#description SecurityhubConnectorV2#description}.

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/securityhub_connector_v2#kms_key_arn SecurityhubConnectorV2#kms_key_arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/securityhub_connector_v2#region SecurityhubConnectorV2#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/securityhub_connector_v2#tags SecurityhubConnectorV2#tags}.

---

### SecurityhubConnectorV2ConnectorProvider <a name="SecurityhubConnectorV2ConnectorProvider" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProvider.Initializer"></a>

```typescript
import { securityhubConnectorV2 } from '@cdktn/provider-aws'

const securityhubConnectorV2ConnectorProvider: securityhubConnectorV2.SecurityhubConnectorV2ConnectorProvider = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProvider.property.jiraCloud">jiraCloud</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloud">SecurityhubConnectorV2ConnectorProviderJiraCloud</a>[]</code> | jira_cloud block. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProvider.property.serviceNow">serviceNow</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNow">SecurityhubConnectorV2ConnectorProviderServiceNow</a>[]</code> | service_now block. |

---

##### `jiraCloud`<sup>Optional</sup> <a name="jiraCloud" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProvider.property.jiraCloud"></a>

```typescript
public readonly jiraCloud: IResolvable | SecurityhubConnectorV2ConnectorProviderJiraCloud[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloud">SecurityhubConnectorV2ConnectorProviderJiraCloud</a>[]

jira_cloud block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/securityhub_connector_v2#jira_cloud SecurityhubConnectorV2#jira_cloud}

---

##### `serviceNow`<sup>Optional</sup> <a name="serviceNow" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProvider.property.serviceNow"></a>

```typescript
public readonly serviceNow: IResolvable | SecurityhubConnectorV2ConnectorProviderServiceNow[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNow">SecurityhubConnectorV2ConnectorProviderServiceNow</a>[]

service_now block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/securityhub_connector_v2#service_now SecurityhubConnectorV2#service_now}

---

### SecurityhubConnectorV2ConnectorProviderJiraCloud <a name="SecurityhubConnectorV2ConnectorProviderJiraCloud" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloud"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloud.Initializer"></a>

```typescript
import { securityhubConnectorV2 } from '@cdktn/provider-aws'

const securityhubConnectorV2ConnectorProviderJiraCloud: securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloud = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloud.property.projectKey">projectKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/securityhub_connector_v2#project_key SecurityhubConnectorV2#project_key}. |

---

##### `projectKey`<sup>Required</sup> <a name="projectKey" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloud.property.projectKey"></a>

```typescript
public readonly projectKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/securityhub_connector_v2#project_key SecurityhubConnectorV2#project_key}.

---

### SecurityhubConnectorV2ConnectorProviderServiceNow <a name="SecurityhubConnectorV2ConnectorProviderServiceNow" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNow.Initializer"></a>

```typescript
import { securityhubConnectorV2 } from '@cdktn/provider-aws'

const securityhubConnectorV2ConnectorProviderServiceNow: securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNow.property.instanceName">instanceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/securityhub_connector_v2#instance_name SecurityhubConnectorV2#instance_name}. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNow.property.secretArn">secretArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/securityhub_connector_v2#secret_arn SecurityhubConnectorV2#secret_arn}. |

---

##### `instanceName`<sup>Required</sup> <a name="instanceName" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNow.property.instanceName"></a>

```typescript
public readonly instanceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/securityhub_connector_v2#instance_name SecurityhubConnectorV2#instance_name}.

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNow.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/securityhub_connector_v2#secret_arn SecurityhubConnectorV2#secret_arn}.

---

### SecurityhubConnectorV2Health <a name="SecurityhubConnectorV2Health" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Health"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Health.Initializer"></a>

```typescript
import { securityhubConnectorV2 } from '@cdktn/provider-aws'

const securityhubConnectorV2Health: securityhubConnectorV2.SecurityhubConnectorV2Health = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### SecurityhubConnectorV2ConnectorProviderJiraCloudList <a name="SecurityhubConnectorV2ConnectorProviderJiraCloudList" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.Initializer"></a>

```typescript
import { securityhubConnectorV2 } from '@cdktn/provider-aws'

new securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.get"></a>

```typescript
public get(index: number): SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloud">SecurityhubConnectorV2ConnectorProviderJiraCloud</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityhubConnectorV2ConnectorProviderJiraCloud[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloud">SecurityhubConnectorV2ConnectorProviderJiraCloud</a>[]

---


### SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference <a name="SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.Initializer"></a>

```typescript
import { securityhubConnectorV2 } from '@cdktn/provider-aws'

new securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.authStatus">authStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.authUrl">authUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.cloudId">cloudId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.projectKeyInput">projectKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.projectKey">projectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloud">SecurityhubConnectorV2ConnectorProviderJiraCloud</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authStatus`<sup>Required</sup> <a name="authStatus" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.authStatus"></a>

```typescript
public readonly authStatus: string;
```

- *Type:* string

---

##### `authUrl`<sup>Required</sup> <a name="authUrl" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.authUrl"></a>

```typescript
public readonly authUrl: string;
```

- *Type:* string

---

##### `cloudId`<sup>Required</sup> <a name="cloudId" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.cloudId"></a>

```typescript
public readonly cloudId: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `projectKeyInput`<sup>Optional</sup> <a name="projectKeyInput" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.projectKeyInput"></a>

```typescript
public readonly projectKeyInput: string;
```

- *Type:* string

---

##### `projectKey`<sup>Required</sup> <a name="projectKey" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.projectKey"></a>

```typescript
public readonly projectKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityhubConnectorV2ConnectorProviderJiraCloud;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloud">SecurityhubConnectorV2ConnectorProviderJiraCloud</a>

---


### SecurityhubConnectorV2ConnectorProviderList <a name="SecurityhubConnectorV2ConnectorProviderList" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.Initializer"></a>

```typescript
import { securityhubConnectorV2 } from '@cdktn/provider-aws'

new securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.get"></a>

```typescript
public get(index: number): SecurityhubConnectorV2ConnectorProviderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProvider">SecurityhubConnectorV2ConnectorProvider</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityhubConnectorV2ConnectorProvider[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProvider">SecurityhubConnectorV2ConnectorProvider</a>[]

---


### SecurityhubConnectorV2ConnectorProviderOutputReference <a name="SecurityhubConnectorV2ConnectorProviderOutputReference" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.Initializer"></a>

```typescript
import { securityhubConnectorV2 } from '@cdktn/provider-aws'

new securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.putJiraCloud">putJiraCloud</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.putServiceNow">putServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.resetJiraCloud">resetJiraCloud</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.resetServiceNow">resetServiceNow</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putJiraCloud` <a name="putJiraCloud" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.putJiraCloud"></a>

```typescript
public putJiraCloud(value: IResolvable | SecurityhubConnectorV2ConnectorProviderJiraCloud[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.putJiraCloud.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloud">SecurityhubConnectorV2ConnectorProviderJiraCloud</a>[]

---

##### `putServiceNow` <a name="putServiceNow" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.putServiceNow"></a>

```typescript
public putServiceNow(value: IResolvable | SecurityhubConnectorV2ConnectorProviderServiceNow[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.putServiceNow.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNow">SecurityhubConnectorV2ConnectorProviderServiceNow</a>[]

---

##### `resetJiraCloud` <a name="resetJiraCloud" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.resetJiraCloud"></a>

```typescript
public resetJiraCloud(): void
```

##### `resetServiceNow` <a name="resetServiceNow" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.resetServiceNow"></a>

```typescript
public resetServiceNow(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.property.jiraCloud">jiraCloud</a></code> | <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList">SecurityhubConnectorV2ConnectorProviderJiraCloudList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.property.serviceNow">serviceNow</a></code> | <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList">SecurityhubConnectorV2ConnectorProviderServiceNowList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.property.jiraCloudInput">jiraCloudInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloud">SecurityhubConnectorV2ConnectorProviderJiraCloud</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.property.serviceNowInput">serviceNowInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNow">SecurityhubConnectorV2ConnectorProviderServiceNow</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProvider">SecurityhubConnectorV2ConnectorProvider</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `jiraCloud`<sup>Required</sup> <a name="jiraCloud" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.property.jiraCloud"></a>

```typescript
public readonly jiraCloud: SecurityhubConnectorV2ConnectorProviderJiraCloudList;
```

- *Type:* <a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList">SecurityhubConnectorV2ConnectorProviderJiraCloudList</a>

---

##### `serviceNow`<sup>Required</sup> <a name="serviceNow" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.property.serviceNow"></a>

```typescript
public readonly serviceNow: SecurityhubConnectorV2ConnectorProviderServiceNowList;
```

- *Type:* <a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList">SecurityhubConnectorV2ConnectorProviderServiceNowList</a>

---

##### `jiraCloudInput`<sup>Optional</sup> <a name="jiraCloudInput" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.property.jiraCloudInput"></a>

```typescript
public readonly jiraCloudInput: IResolvable | SecurityhubConnectorV2ConnectorProviderJiraCloud[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloud">SecurityhubConnectorV2ConnectorProviderJiraCloud</a>[]

---

##### `serviceNowInput`<sup>Optional</sup> <a name="serviceNowInput" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.property.serviceNowInput"></a>

```typescript
public readonly serviceNowInput: IResolvable | SecurityhubConnectorV2ConnectorProviderServiceNow[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNow">SecurityhubConnectorV2ConnectorProviderServiceNow</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityhubConnectorV2ConnectorProvider;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProvider">SecurityhubConnectorV2ConnectorProvider</a>

---


### SecurityhubConnectorV2ConnectorProviderServiceNowList <a name="SecurityhubConnectorV2ConnectorProviderServiceNowList" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.Initializer"></a>

```typescript
import { securityhubConnectorV2 } from '@cdktn/provider-aws'

new securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.get"></a>

```typescript
public get(index: number): SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNow">SecurityhubConnectorV2ConnectorProviderServiceNow</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityhubConnectorV2ConnectorProviderServiceNow[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNow">SecurityhubConnectorV2ConnectorProviderServiceNow</a>[]

---


### SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference <a name="SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.Initializer"></a>

```typescript
import { securityhubConnectorV2 } from '@cdktn/provider-aws'

new securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.authStatus">authStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.instanceNameInput">instanceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.secretArnInput">secretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.instanceName">instanceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNow">SecurityhubConnectorV2ConnectorProviderServiceNow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authStatus`<sup>Required</sup> <a name="authStatus" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.authStatus"></a>

```typescript
public readonly authStatus: string;
```

- *Type:* string

---

##### `instanceNameInput`<sup>Optional</sup> <a name="instanceNameInput" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.instanceNameInput"></a>

```typescript
public readonly instanceNameInput: string;
```

- *Type:* string

---

##### `secretArnInput`<sup>Optional</sup> <a name="secretArnInput" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.secretArnInput"></a>

```typescript
public readonly secretArnInput: string;
```

- *Type:* string

---

##### `instanceName`<sup>Required</sup> <a name="instanceName" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.instanceName"></a>

```typescript
public readonly instanceName: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityhubConnectorV2ConnectorProviderServiceNow;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNow">SecurityhubConnectorV2ConnectorProviderServiceNow</a>

---


### SecurityhubConnectorV2HealthList <a name="SecurityhubConnectorV2HealthList" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.Initializer"></a>

```typescript
import { securityhubConnectorV2 } from '@cdktn/provider-aws'

new securityhubConnectorV2.SecurityhubConnectorV2HealthList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.get"></a>

```typescript
public get(index: number): SecurityhubConnectorV2HealthOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### SecurityhubConnectorV2HealthOutputReference <a name="SecurityhubConnectorV2HealthOutputReference" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.Initializer"></a>

```typescript
import { securityhubConnectorV2 } from '@cdktn/provider-aws'

new securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.property.connectorStatus">connectorStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.property.lastCheckedAt">lastCheckedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Health">SecurityhubConnectorV2Health</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectorStatus`<sup>Required</sup> <a name="connectorStatus" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.property.connectorStatus"></a>

```typescript
public readonly connectorStatus: string;
```

- *Type:* string

---

##### `lastCheckedAt`<sup>Required</sup> <a name="lastCheckedAt" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.property.lastCheckedAt"></a>

```typescript
public readonly lastCheckedAt: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SecurityhubConnectorV2Health;
```

- *Type:* <a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Health">SecurityhubConnectorV2Health</a>

---



